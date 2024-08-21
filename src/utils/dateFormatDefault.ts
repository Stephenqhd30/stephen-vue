import moment from "moment";

const dateFormatDefault = (value: string) => {
  return moment(value).format("YYYY-MM-DD HH:mm:ss");
};

const dateFormatYear = (value: string) => {
	return moment(value).format("YYYY-MM-DD");
};

export {dateFormatDefault, dateFormatYear};