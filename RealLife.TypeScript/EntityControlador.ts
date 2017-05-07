/// <reference path="evento/OnUpdateListener.ts"/>
/// <reference path="Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class EntityControlador extends Objeto implements OnUpdateListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: EntityControlador;

        public static get i(): EntityControlador
        {
            if (EntityControlador._i != null)
            {
                return EntityControlador._i;
            }

            EntityControlador._i = new EntityControlador();

            return EntityControlador._i;
        }

        private _arrObjEntity: Array<Entity>;

        private get arrObjEntity(): Array<Entity>
        {
            if (this._arrObjEntity != null)
            {
                return this._arrObjEntity;
            }

            this._arrObjEntity = new Array<Entity>();

            return this._arrObjEntity;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public add(objEntity: Entity): void
        {
            if (objEntity == null)
            {
                return;
            }

            this.arrObjEntity.push(objEntity);

            if (this.arrObjEntity.length == 1)
            {
                Screen.i.addEvtOnUpdateListener(this);
            }
        }

        private processarOnUpdate(): void
        {
            // TODO: Implementar.
        }

        public remover(objEntity: Entity): void
        {
            if (objEntity == null)
            {
                return;
            }

            if (this.arrObjEntity.indexOf(objEntity) < 0)
            {
                return;
            }

            this.arrObjEntity.splice(this.arrObjEntity.indexOf(objEntity), 1)

            if (this.arrObjEntity.length == 0)
            {
                Screen.i.removerEvtOnUpdateListener(this);
            }
        }

        // #endregion Métodos

        // #region Eventos

        public onUpdate(): void
        {
            this.processarOnUpdate();
        }

        // #endregion Eventos
    }
}