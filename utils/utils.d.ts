declare namespace Utils {
    export interface IPreAction {
        action: () => Promise<boolean>;
    }
}