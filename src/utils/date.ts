import { format } from "date-fns";

type IPartnerFNS = "dd/MM/yyyy";

// https://date-fns.org/v2.28.0/docs/format
const _format = (
  date: Date,
  partner: IPartnerFNS,
  options?: Record<string, any>
) => format(date, partner, options);

const DATE = {
  format: _format,
};

export default DATE;
