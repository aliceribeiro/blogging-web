// TODO: Ajustar essa regra
/* eslint-disable @typescript-eslint/no-misused-promises */

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Modal as BootstrapModal } from 'bootstrap';

import { Button } from "../Button";
import { Form } from "../Form";
import { FormSubmitButton } from "../Form/FormSubmitButton";
import { FormTextArea } from "../Form/FormTextArea";
import { FormTextField } from "../Form/FormTextField";
import { Modal } from "../Modal";
import { useCreatePost } from "../../hooks/useCreatePost";
import { FormPostSchema, PostFormFields, PostFormValues } from "./FormPost.schema";
import { Paths } from "../../routes/paths";

import "./styles.css";

const MODAL_ID = 'modal-create-post';
const FORM_ID = 'create-post';
const FORM_DEFAULT_VALUES = {
    description: '',
    title: '',
};

export const FormPost = () => {
    const navigate = useNavigate();
    const methods = useForm<PostFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(FormPostSchema)
    });

    const { handleSubmit, reset } = methods;

    const handleToggleModal = () => {
        reset(FORM_DEFAULT_VALUES);

        const modal = BootstrapModal.getOrCreateInstance(document.getElementById(MODAL_ID)!);
        modal.toggle();
    };

    const handleRequestSuccess = () => {
        handleToggleModal();
        navigate(Paths.BASE, { replace: true });
    };

    const { loading, savePost } = useCreatePost({ onSuccess: handleRequestSuccess });

    const handleReset = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        reset(FORM_DEFAULT_VALUES);
    };

    const handleSavePost = async (data: PostFormValues) => {
        await savePost(data);
    };

    return (
        <>
            <Button onClick={handleToggleModal} variant="primary">
                Criar nova publicação
            </Button>
            <Modal
                id={MODAL_ID}
                title="Criar uma nova publicação"
            >
                <Form id={FORM_ID} methods={methods} onSubmit={handleSubmit(handleSavePost)}>
                    <section className="form-post-body">
                        <FormTextField
                            fieldName={PostFormFields.title}
                            label="Título"
                            placeholder="Título da publicação"
                            srLabel="Campo para inserir o título da publicação"
                        />
                        <FormTextArea
                            fieldName={PostFormFields.description}
                            label="Conteúdo"
                            placeholder="Digite aqui o que você deseja compartilhar."
                            srLabel="Campo para inserir o conteúdo da publicação"
                        />
                    </section>
                    <div className="modal-footer custom-modal-footer">
                        <FormSubmitButton
                            loading={loading}
                            formId={FORM_ID}
                            onSubmit={handleSubmit(handleSavePost)}
                        >
                            Salvar publicação
                        </FormSubmitButton>
                        <Button
                            disabled={loading}
                            onClick={handleReset}
                            type="reset"
                            variant="secondary"
                            buttonProps={{
                                form: FORM_ID
                            }}
                        >
                            Limpar formulário
                        </Button>
                    </div>
                </Form>
            </Modal>
        </>
    );
};
