export default function classDecoratorLog(name: string) {
    return function classDecorator<T extends { new(...args: any[]): any }>(constructor: T) {
        const currentAction = (constructor as any).PreActions || [];

        const logAction: Utils.IPreAction = {
            action: () => {
                console.log("ACTION: " + name);
                return Promise.resolve(true);
            },
        };

        return class extends constructor {
            static PreActions: Utils.IPreAction[] = [ ...currentAction, logAction ];
        };
    };
}
