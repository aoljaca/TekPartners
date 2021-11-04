import { VuetifyThemeVariant } from "vuetify/types/services/theme";

export interface ThemeSet {
  dark?: Partial<VuetifyThemeVariant> | undefined;
  light?: Partial<VuetifyThemeVariant> | undefined;
}

export const conferenceTheme: ThemeSet = {
  light: {
    primary: {
      base: "#253746",
    },
    secondary: "#F5F5F5",
    accent: "#006298",
    tint: "#74C4D7",
    success: "#BFCC80",
    warning: "#FFC845",
    error: "#DC4405",
    info: "#F5F5F5",
  },
};

export const adminTheme: ThemeSet = {
  // Revisit when Boundary screens are complete for Admin
  light: {
    primary: {
      base: "#9E9E9E",
    },
    secondary: "#616161",
    accent: "#AAAAAA",
  },
};
