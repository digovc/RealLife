module RealLife
{
    export interface OnServerEventTriggerListener
    {
        onServerEventTrigger(strMetodoNome: string, arrObjArg: Object[]): void;
    }
}