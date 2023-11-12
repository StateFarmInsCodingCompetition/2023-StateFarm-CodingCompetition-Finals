import { PropsWithChildren, createContext, useContext } from 'react';


const AppContext = createContext(undefined);

export function AppWrapper({ children, value }: PropsWithChildren<{ value: any; }>) {

    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}