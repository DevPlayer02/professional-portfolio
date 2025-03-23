import { Theme } from "../types/theme"

export const lightTheme: Theme = {
  appBackground: "#000000",
  appColor: "#000",
  appDefaultStroke: "#E0E0E0",
  appLogo: "logo-black.svg",
  buttons: {
    alert: "#E80000",
    alertColor: "#FFF",
    alertHover: "#D80000",
    disabled: "#CCC",
    disabledColor: "#666",
    primary: "#0C70F2",
    primaryColor: "#FFF",
    primaryHover: "#0061DE",
  },
  card: {
    alert: "#E80000",
    background: "#FFF",
    border: "#E0E0E0",
    success: "#008000",
    warning: "#F7A300",
  },
  typography: {
    error: "#FF0202",
    subtitle: "#666",
    success: "#008008",
  },
}

export const darkTheme: Theme = {
  appBackground: "#000000",
  appColor: "#FFF",
  appDefaultStroke: "#FF6300",
  appLogo: "logo-white.svg",
  buttons: {
    alert: "#E80000",
    alertColor: "#FFF",
    alertHover: "#D80000",
    disabled: "#313649",
    disabledColor: "#6D7B8E",
    primary: "#0C70F2",
    primaryColor: "#FFF",
    primaryHover: "#0061DE",
  },
}
