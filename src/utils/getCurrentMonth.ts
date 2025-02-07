const MONTHS = ['Janeiro', 'Fevereiro', 'Mar', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

export const getCurrentMonthName = (): string => MONTHS[new Date().getMonth()]