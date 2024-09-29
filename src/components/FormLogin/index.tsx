/* eslint-disable @typescript-eslint/no-misused-promises */
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { FormPassword } from "../../components/Form/FormPassword";
import { FormSubmitButton } from "../../components/Form/FormSubmitButton";
import { FormTextField } from "../../components/Form/FormTextField";
import { useLogin } from "../../hooks/useLogin";
import { FormLoginSchema, LoginFormFields, LoginFormValues } from "./LoginFormSchema";
import { Paths } from "../../routes/paths";

import "./styles.css";

const FORM_ID = 'login-user';
const FORM_DEFAULT_VALUES = {
    username: '',
    password: '',
};

export const FormLogin = () => {
    const { loading, loginUser } = useLogin();
    const navigate = useNavigate();
    const methods = useForm<LoginFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(FormLoginSchema)
    });

    const { handleSubmit } = methods;

    const handleSubmitLogin = async (data: LoginFormValues) => {
        await loginUser(data);
    };

    return (
        <>
            <Form id={FORM_ID} methods={methods} onSubmit={handleSubmit(handleSubmitLogin)}>
                <FormTextField
                    fieldName={LoginFormFields.username}
                    label="Usuário"
                    placeholder="Digite o nome de usuário"
                    srLabel="Campo para inserir o nome do usuário"
                />
                <FormPassword
                    fieldName={LoginFormFields.password}
                    label="Senha"
                    placeholder="Digite a sua senha"
                    srLabel="Campo para inserir a senha do usuário"
                />
                <div className="form-login-actions-container">
                    <FormSubmitButton
                        loading={loading}
                        formId={FORM_ID}
                        fullWidth
                        onSubmit={handleSubmit(handleSubmitLogin)}
                    >
                        Entrar
                    </FormSubmitButton>
                    <Button fullWidth onClick={() => navigate(Paths.BASE)} variant="secondary">
                        Voltar
                    </Button>
                </div>
            </Form>
        </>
    );

};
