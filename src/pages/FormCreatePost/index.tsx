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

const FORM_ID = 'create-post';
const FORM_DEFAULT_VALUES = {
    content: '',
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
                <section className="d-flex flex-column gap-4 my-4 mx-2 form-post-body" style={{ height: '400px' }}>
                    <FormTextField
                        fieldName={PostFormFields.title}
                        label="Título"
                        placeholder="Título da publicação"
                        srLabel="Campo para inserir o título da publicação"
                    />
                    <FormTextArea
                        fieldName={PostFormFields.content}
                        label="Conteúdo"
                        placeholder="Digite aqui o que você deseja compartilhar."
                        srLabel="Campo para inserir o conteúdo da publicação"
                    />
                </section>
                <div className="d-flex gap-3 justify-content-end mt-5">
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
