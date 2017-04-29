module RealLife
{
    export interface OnServerEventTriggerListener
    {
        onServerEventTrigger(strMetodoNome: string, arrObjArg: System.Array<any>): void;
    }
}