/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useMemo } from 'react';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Button"
import { Form } from "../../components/Form";
import { FormDate } from "../../components/Form/FormDate";
import { FormSubmitButton } from "../../components/Form/FormSubmitButton";
import { FormTextArea } from "../../components/Form/FormTextArea";
import { FormTextField } from "../../components/Form/FormTextField";
import { useEditEvent } from '../../hooks/useEditEvent';
import { useEventDetails } from '../../hooks/useEventDetails';
import { PageContentWrapper } from "../../templates/PageContentWrapper";
import { PageLayout } from "../../templates/PageLayout";
import { FormEditEventSchema, EditEventFormFields, EditEventFormValues } from "./FormEditEvent.schema";

import "./styles.css";

const FormEditEvent = () => {
    const params = useParams();
    const eventId = params.eventId ?? ''

    const {
        getEventDetails,
        event,
        requestStatus
    } = useEventDetails(eventId);

    const defaultValues = useMemo(() => ({
        description: event?.description,
        endDate: event?.endDate,
        name: event?.name,
        startDate: event?.startDate
    }), [event]);

    const { editEvent, loading } = useEditEvent(eventId);
    const methods = useForm<EditEventFormValues>({
        defaultValues: defaultValues,
        resolver: yupResolver(FormEditEventSchema)
    });

    const { handleSubmit, reset } = methods

    const handleReset = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        reset(defaultValues);
    };

    const handleSaveEventEdition = async (data: EditEventFormValues) => {
        await editEvent(data);
    };

    useEffect(() => {
        // This is necessary so default values is set on form fields
        reset(defaultValues);
    }, [event]);

    useEffect(() => {
        void getEventDetails();
    }, [eventId]);

    return (
        <PageLayout showNavbar title="Editar evento">
            <PageContentWrapper
                onTryAgain={() => void getEventDetails()}
                status={requestStatus}
                variant="circular"
            >
                <Form id={eventId} methods={methods} onSubmit={handleSubmit(handleSaveEventEdition)}>
                    <section className="form-edit-event">
                        <FormDate
                            fieldName={String(EditEventFormFields.startDate)}
                            form={eventId}
                            label="Data de início"
                        />
                        <FormDate
                            fieldName={String(EditEventFormFields.endDate)}
                            form={eventId}
                            label="Data fim"
                        />
                        <FormTextField
                            fieldName={EditEventFormFields.name}
                            label="Evento"
                            placeholder="Nome do evento"
                            srLabel="Campo para inserir o nome do evento"
                        />
                        <FormTextArea
                            fieldName={EditEventFormFields.description}
                            label="Conteúdo"
                            placeholder="Digite aqui os detalhes do evento que você deseja criar."
                            srLabel="Campo para inserir a descrição do evento"
                        />
                    </section>
                    <div className="d-flex gap-3 justify-content-end mt-5">
                        <FormSubmitButton
                            loading={loading}
                            formId={eventId}
                            onSubmit={handleSubmit(handleSaveEventEdition)}
                        >
                            Salvar
                        </FormSubmitButton>
                        <Button
                            disabled={loading}
                            onClick={handleReset}
                            type="reset"
                            variant="secondary"
                            buttonProps={{
                                form: eventId
                            }}
                        >
                            Desfazer
                        </Button>
                    </div>
                </Form>
            </PageContentWrapper>
        </PageLayout>
    );
};

export default FormEditEvent;
