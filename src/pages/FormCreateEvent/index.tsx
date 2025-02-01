/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Button"
import { Form } from "../../components/Form";
import { FormDate } from "../../components/Form/FormDate";
import { FormSelect } from "../../components/Form/FormSelect";
import { FormSubmitButton } from "../../components/Form/FormSubmitButton";
import { FormTextField } from "../../components/Form/FormTextField";
import { useCreateEvent } from "../../hooks/useCreateEvent";
import { usePermission } from "../../hooks/usePermission";
import { useSelectOptionsFromEnum } from "../../hooks/useSelectOptionsFromEnum";
import { UserProfiles, UserProfilesLabels } from "../../model/enums/UserProfiles";
import { PageLayout } from "../../templates/PageLayout";
import { FormEventSchema, EventFormFields, EventFormValues } from "./FormEvent.schema";

import "./styles.css";

const FORM_ID = 'create-event';
const FORM_DEFAULT_VALUES = {
    name: '',
    public: UserProfiles.STUDENT,
};

const FormCreateEvent = () => {
    const viewers = useSelectOptionsFromEnum(UserProfilesLabels);
    const { loading, saveEvent } = useCreateEvent();
    const { userProfile } = usePermission();
    const methods = useForm<EventFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(FormEventSchema)
    });

    const { handleSubmit, reset } = methods

    const handleReset = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        reset(FORM_DEFAULT_VALUES);
    };

    const handleSaveEvent = async (data: EventFormValues) => {
        await saveEvent({ ...data, adminBy: userProfile! });
    };

    return (
        <PageLayout showNavbar title="Adicionar um novo evento">
            <Form id={FORM_ID} methods={methods} onSubmit={handleSubmit(handleSaveEvent)}>
                <section className="form-create-event">
                    <FormTextField
                        fieldName={EventFormFields.name}
                        label="Evento"
                        placeholder="Nome do evento"
                        srLabel="Campo para inserir o nome do evento"
                    />
                    <FormSelect
                        fieldName={EventFormFields.public}
                        form={FORM_ID}
                        label="Público alvo"
                        options={viewers}
                        srLabel="Campo para escolher quem pode visualizar o evento"
                    />
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
