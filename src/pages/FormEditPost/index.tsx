/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useMemo } from 'react';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { FormSubmitButton } from "../../components/Form/FormSubmitButton";
import { FormTextArea } from "../../components/Form/FormTextArea";
import { FormTextField } from "../../components/Form/FormTextField";
import { ListWrapper } from "../../templates/ListWrapper";
import { PageLayout } from "../../templates/PageLayout";
import { useEditPost } from "../../hooks/useEditPost";
import { usePostDetails } from "../../hooks/usePostDetails";
import { FormEditPostSchema, EditPostFormFields, EditPostFormValues } from "./FormEditPost.schema";

const FormEditPost = () => {
    const params = useParams();
    const postId = params.postId ?? ''

    const {
        getPostDetails,
        post,
        requestStatus
    } = usePostDetails(postId);

    const defaultValues = useMemo(() => ({
        content: post?.content,
        title: post?.title
    }), [post]);

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

    useEffect(() => {
        // This is necessary so default values is set on form fields
        reset(defaultValues);
    }, [post]);

    useEffect(() => {
        void getPostDetails();
    }, [postId]);

    return (
        <PageLayout showNavbar title="Editar publicação">
            <ListWrapper onTryAgain={() => void getPostDetails()} status={requestStatus}>
                <Form id={postId} methods={methods} onSubmit={handleSubmit(handleSaveEdition)}>
                    <section className="d-flex flex-column gap-3 my-2 mx-1">
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
                    <div className="d-flex justify-content-end gap-3 align-items-center">
                        <FormSubmitButton
                            loading={loading}
                            formId={postId}
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
                                form: postId
                            }}
                        >
                            Desfazer
                        </Button>
                    </div>
                </Form>
            </ListWrapper>
        </PageLayout>
    );
};

export default FormEditPost;
