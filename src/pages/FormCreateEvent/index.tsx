/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Button"
import { Form } from "../../components/Form";
import { FormDate } from "../../components/Form/FormDate";
import { FormSubmitButton } from "../../components/Form/FormSubmitButton";
import { FormTextArea } from "../../components/Form/FormTextArea";
import { FormTextField } from "../../components/Form/FormTextField";
import { useCreateEvent } from "../../hooks/useCreateEvent";
import { PageLayout } from "../../templates/PageLayout";
import { FormEventSchema, EventFormFields, EventFormValues } from "./FormEvent.schema";

import "./styles.css";

const FORM_ID = 'create-event';

const FormCreateEvent = () => {
    const { loading, saveEvent } = useCreateEvent();
    const methods = useForm<EventFormValues>({
        resolver: yupResolver(FormEventSchema)
    });

    const { handleSubmit, reset } = methods

    const handleReset = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        reset();
    };

    const handleSaveEvent = async (data: EventFormValues) => {
        await saveEvent(data);
    };

    return (
        <PageLayout showNavbar title="Adicionar um novo evento">
            <Form id={FORM_ID} methods={methods} onSubmit={handleSubmit(handleSaveEvent)}>
                <section className="form-create-event">
                    <FormDate
                        fieldName={String(EventFormFields.startDate)}
                        form={FORM_ID}
                        label="Data de início"
                    />
                    <FormDate
                        fieldName={String(EventFormFields.endDate)}
                        form={FORM_ID}
                        label="Data fim"
                    />
                    <FormTextField
                        fieldName={EventFormFields.name}
                        label="Evento"
                        placeholder="Nome do evento"
                        srLabel="Campo para inserir o nome do evento"
                    />
                    <FormTextArea
                        fieldName={EventFormFields.description}
                        label="Conteúdo"
                        placeholder="Digite aqui os detalhes do evento que você deseja criar."
                        srLabel="Campo para inserir a descrição do evento"
                    />
                </section>
                <div className="d-flex gap-3 justify-content-end mt-5">
                    <FormSubmitButton
                        loading={loading}
                        formId={FORM_ID}
                        onSubmit={handleSubmit(handleSaveEvent)}
                    >
                        Salvar evento
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
        </PageLayout>
    );
};

export default FormCreateEvent;
