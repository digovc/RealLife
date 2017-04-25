module RealLife
{
    export interface OnChatCommandListener
    {
        onChatCommand(strComando: string): void;
    }
}