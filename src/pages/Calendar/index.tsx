// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import { Button } from "../../components/Button";
import { TableWeek } from "../../components/Calendar";
// import { DeleteEventTemplate } from "../../components/DeleteEventTemplate";
// import { EmptyState } from "../../components/EmptyState";
import { PageContentWrapper } from "../../templates/PageContentWrapper";
import { PageLayout } from "../../templates/PageLayout";
// import { useListEvents } from "../../hooks/useListEvents";
// import { usePermission } from "../../hooks/usePermission";
// import { Paths } from "../../routes/paths";
// import { dateHandler } from "../../utils/dateHandler";
// import { UserProfiles } from "../../model/enums/UserProfiles";

const Calendar = () => {
    // const navigate = useNavigate();
    // const { eventsList, getEventsList, requestStatus } = useListEvents();
    // const { hasPermission, userProfile } = usePermission();

    // useEffect(() => {
    //     void getEventsList(userProfile)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // const eventsList = [{ adminBy: UserProfiles.ADM, id: '1231241', endDate: new Date(), startDate: new Date(), name: 'Matriculas para novos alunos' }]

    return (
        <PageLayout showNavbar title="Agenda" showCreateCalendarButton>
            <PageContentWrapper onTryAgain={() => console.log('a')} status="success">
                <TableWeek />
                {/* {!eventsList.length ?
                    <EmptyState description="Nenhum evento encontrado." />
                    : (
                        <section>
                            {eventsList.map((event) => {
                                const showActionButtons = hasPermission && event.adminBy === userProfile

                                return (
                                    <div key={event.id}>
                                        <p>{dateHandler(event.startDate).format('DD/MM/YYYY')}-{dateHandler(event.endDate).format('DD/MM/YYYY')}</p>
                                        <p>{event.name}</p>
                                        {showActionButtons && (
                                            <div className="actions-container">
                                                <Button onClick={() => console.log('Editar')} variant="primary">
                                                    Editar
                                                </Button>
                                                <DeleteEventTemplate id={event.id} />
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </section>
                    )} */}
            </PageContentWrapper>
        </PageLayout>
    );
};

export default Calendar;