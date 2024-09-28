// TODO: Ajustar essa regra
/* eslint-disable @typescript-eslint/no-misused-promises */

import { useMemo } from 'react';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal as BootstrapModal } from 'bootstrap';

import { Button } from "../Button";
import { FormSubmitButton } from "../Form/FormSubmitButton";
import { FormTextArea } from "../Form/FormTextArea";
import { FormTextField } from "../Form/FormTextField";
import { Modal } from "../Modal";
import { useEditPost } from "../../hooks/useEditPost";
import { FormEditPostSchema, EditPostFormFields, EditPostFormValues } from "./FormEditPost.schema";

type FormEditPostProps = {
    defaultValues: {
        content: string;
        title: string;
    };
    postId: string | number;
};

export const FormEditPost = ({ defaultValues, postId }: FormEditPostProps) => {
    const modalId = useMemo(() => (`modal-edit-post-${postId}`), [postId])

    // TODO: Sucesso
    const { editPost, loading } = useEditPost(postId)
    const methods = useForm<EditPostFormValues>({
        defaultValues,
        resolver: yupResolver(FormEditPostSchema)
    });

    const { handleSubmit, reset } = methods;

    const handleSaveEdition = async (data: EditPostFormValues) => {
        await editPost(data);
    }

    const handleReset = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        reset(defaultValues);
    };

    const handleToggleModal = () => {
        const modal = BootstrapModal.getOrCreateInstance(document.getElementById(modalId)!);
        modal.toggle();
    };

    return (
        <>
            <Button onClick={handleToggleModal} variant="secondary">
                Editar
            </Button>
            <Modal actions={<>
                <FormSubmitButton
                    loading={loading}
                    formId={modalId}
                    onSubmit={handleSubmit(handleSaveEdition)}
                >
                    Salvar
                </FormSubmitButton>
                <Button
                    disabled={loading}
                    onClick={handleReset}
                    type="reset"
                    variant="secondary"
                    buttonProps={{
                        form: modalId
                    }}
                >
                    Desfazer
                </Button>
            </>}
                id={modalId}
                title="Edição"
            >
                <section className="form-edit-body">
                    <FormTextField
                        fieldName={EditPostFormFields.title}
                        label="Título"
                        srLabel="Campo para inserir o título da publicação"
                    />
                    <FormTextArea
                        fieldName={EditPostFormFields.content}
                        label="Conteúdo"
                        srLabel="Campo para inserir o conteúdo da publicação"
                    />
                </section>
            </Modal>
        </>
    );
};
