export type ProductNavigationProps = {
    id?: string;
}

export type OrderNavigationProps = {
    id: string;
}

// Estamos sobreescrevendo ReactNavigation e definindo parâmetros de cada rota;

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            product: ProductNavigationProps;
            order: OrderNavigationProps;
            orders: undefined;
        }
    }
}