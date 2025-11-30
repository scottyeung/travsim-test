import { createContext, useContext, useState, FC, PropsWithChildren } from "react";

interface LocaleContextType {
  countryOrRegionCode: string;
  setCountryOrRegionCode: (code: string) => void;
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [countryOrRegionCode, setCountryOrRegionCode] = useState("US");

  const value = {
    countryOrRegionCode,
    setCountryOrRegionCode,
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};