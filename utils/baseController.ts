export default abstract class BaseControllerAction<I, O, R> {
    static PreActions: () => Utils.IPreAction[];

    get method(): string { return "GET"; }
    get path(): string  { return ""; }

    abstract handler(input: I): Promise<R>;
}
