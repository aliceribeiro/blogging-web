/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Button"
import { Form } from "../../components/Form";
import { FormSubmitButton } from "../../components/Form/FormSubmitButton";
import { FormTextArea } from "../../components/Form/FormTextArea";
import { FormTextField } from "../../components/Form/FormTextField";
import { PageLayout } from "../../templates/PageLayout";
import { useCreatePost } from "../../hooks/useCreatePost";
import { FormPostSchema, PostFormFields, PostFormValues } from "./FormPost.schema";

import "./styles.css";

const FORM_ID = 'create-post';
const FORM_DEFAULT_VALUES = {
    description: '',
    title: '',
};

const FormCreatePost = () => {
    const { loading, savePost } = useCreatePost();
    const methods = useForm<PostFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(FormPostSchema)
    });

    const { handleSubmit, reset } = methods

    const handleReset = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        reset(FORM_DEFAULT_VALUES);
    };

    const handleSavePost = async (data: PostFormValues) => {
        await savePost(data);
    };

    return (
        <PageLayout showNavbar title="Criar uma nova publicação">
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
                <div className="actions-container">
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
        </PageLayout >
    );
};

export default FormCreatePost;