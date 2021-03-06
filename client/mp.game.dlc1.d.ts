/// <reference path="../client.d.ts" />

declare interface MpGameDlc1 {
    getPropFromOutfit(outfit: object, slot: number, item: object): boolean;
    initShopPedComponent(outComponent: number): number;
    getShopPedQueryComponent(componentId: number, outComponent: number): number;
    getDlcVehicleData(dlcVehicleIndex: number, outData: object): boolean;
    getNumDlcWeaponComponents(dlcWeaponIndex: number): number;
    getDlcVehicleFlags(p0: number): number;
    getForcedComponent(componentHash: string | number, componentId: number, p2: object, p3: object, p4: object): void;
    getDlcWeaponComponentData(p0: object, p1: object, componentDataPtr: MpGameDlc1DlcComponentData | object): boolean;
    getShopPedQueryOutput(p0: object, outfit: MpGameDlc1Outfit | object): void;
    getVariantComponent(componentHash: string | number, componentId: number, p2: object, p3: object, p4: object): void;
    getShopPedComponent(p0: object, p1: object): void;
    getDlcWeaponData(dlcWeaponIndex: number, outData: MpGameDlc1DlcWeaponData | object): boolean;
    getNumPropsFromOutfit(p0: MpGameDlc1CharacterType | number, p1: number, p2: number, p3: boolean, p4: number, componentId: number): number;
    getShopPedOutfit(p0: object, p1: object): void;
    getNumForcedComponents(componentHash: string | number): number;
    isDlcDataEmpty(dlcData: number): boolean;
    getShopPedQueryProp(p0: object, p1: object): void;
    initShopPedProp(outProp: number): number;
    getDlcVehicleModel(dlcVehicleIndex: number): string | number;
}

declare enum MpGameDlc1CharacterType {
    michael = 0,
    franklin = 1,
    trevor = 2,
    freemodeMale = 3,
    freemodeFemale = 4
}

declare interface MpGameDlc1DlcWeaponData {
    emptyCheck: number;
    padding1: number;
    weaponHash: number;
    padding2: number;
    unk: number;
    padding3: number;
    weaponCost: number;
    padding4: number;
    ammoCost: number;
    padding5: number;
    ammoType: number;
    padding6: number;
    defaultClipSize: number;
    padding7: number;
    nameLabel: string;
    descLabel: string;
    desc2Label: string;
    upperCaseNameLabel: string;
}

declare interface MpGameDlc1Outfit {
    mask: number;
    torso: number;
    pants: number;
    parachute: number;
    shoes: number;
    misc1: number;
    tops1: number;
    armour: number;
    crew: number;
    tops2: number;
    hat: number;
    glasses: number;
    earpiece: number;
    maskTexture: number;
    torsoTexture: number;
    pantsTexture: number;
    parachuteTexture: number;
    shoesTexture: number;
    misc1Texture: number;
    tops1Texture: number;
    armourTexture: number;
    crewTexture: number;
    tops2Texture: number;
    hatTexture: number;
    glassesTexture: number;
    earpiceTexture: number;
}

declare interface MpGameDlc1DlcComponentData {
    attachBone: number;
    padding1: number;
    bActiveByDefault: number;
    padding2: number;
    unk: number;
    padding3: number;
    componentHash: number;
    padding4: number;
    unk2: number;
    padding5: number;
    componentCost: number;
    padding6: number;
    nameLabel: string;
    descLabel: string;
}
