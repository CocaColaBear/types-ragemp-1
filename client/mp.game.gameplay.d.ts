/// <reference path="../client.d.ts" />

declare interface MpGameGameplay {
    displayOnscreenKeyboard(p0: number, windowTitle: string, p2: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, maxInputLength: number): void; //TODO: Change windowTitle to mp.game.gameplay.windowTitles
    clearAreaOfVehicles(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean): void;
    getModelDimensions(modelHash: number | string, minimum: MpVector3, maximum: MpVector3): MpGameGameplayModelDimension;
    clearAreaOfCops(x: number, y: number, z: number, radius: number, flags: number): void;
    createIncidentWithEntity(p0: MpGameGameplayIncidentType, p1: MpEntity, p2: number, p3: number, outIncident: number): number;
    hasButtonCombinationJustBeenEntered(hash: number | string, amount: number): boolean;
    clearAreaOfProjectiles(x: number, y: number, z: number, radius: number, flags: number): void;
    areStringsEqual(string1: string, string2: string): boolean;
    registerEnumToSave(p0: object, name: string): void;
    overrideSaveHouse(p0: boolean, p1: number, p2: number, p3: number, p4: number, p5: boolean, p6: number, p7: number): boolean;
    setFireAmmoThisFrame(): object;
    clearAngledAreaOfVehicles(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: boolean): void;
    setFakeWantedLevel(fakeWantedLevel: number): void;
    getAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): number;
    setMinigameInProgress(toggle: boolean): void;
    isBulletInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): boolean;
    addStuntJump(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: object, p16: object): number;
    acos(p0: number): number;
    setTimeScale(time: number): void;
    setFadeOutAfterArrest(toggle: boolean): void;
    compareStrings(str1: string, str2: string, matchCase: boolean, maxLength: number): number;
    addHospitalRestart(x: number, y: number, z: number, p3: number, p4: object): number;
    ignoreNextRestart(toggle: boolean): void;
    disablePoliceRestart(policeIndex: number, toggle: boolean): void;
    removeDispatchSpawnBlockingArea(p0: object): void;
    setWeatherTypeNow(weatherType: string): void;
    disableAutomaticRespawn(disableRespawn: boolean): void;
    isProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, p7: boolean): boolean;
    isNextWeatherType(weatherType: string): boolean;
    getHeadingFromVector2d(dx: number, dy: number): number;
    getRandomFloatInRange(startRange: number, endRange: number): number;
    registerIntToSave(p0: object, name: string): void;
    isBulletInArea(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean;
    createIncident(p0: MpGameGameplayIncidentType, p2: number, p3: number, p4: number, p5: number, p6: number, outIncident: number): number;
    setRandomSeed(time: number): void;
    isPrevWeatherType(weatherType: string): boolean;
    setDispatchTimeBetweenSpawnAttempts(p0: object, p1: number): void;
    addPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: object): object;
    setDispatchTimeBetweenSpawnAttemptsMultiplier(p0: object, p1: number): void;
    setFadeOutAfterDeath(toggle: boolean): void;
    setSaveHouse(p0: object, p1: boolean, p2: boolean): void;
    isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;
    getBitsInRange(vars: number, rangeStart: number, rangeEnd: number): number;
    deleteIncident(incidentId: number): number;
    hasCheatStringJustBeenEntered(hash: number | string): boolean;
    setGamePaused(toggle: boolean): void;
    setWeatherTypeTransition(sourceWeather: string | number, targetWeather: string | number, transitionTime: number): void;
    setSuperJumpThisFrame(): object;
    stringToInt(string: string, outInteger: number): number;
    startSaveArray(p0: object, p1: number, arrayName: string): void;
    tan(p0: number): number;
    setRainFxIntensity(intensity: number): void;
    findSpawnPointInDirection(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, distance: number, spawnPoint: MpVector3): MpVector3;
    setDispatchIdealSpawnDistance(p0: number): void;
    setWeatherTypePersist(weatherType: string): void;
    absf(value: number): number;
    setGravityLevel(level: number): void;
    registerFloatToSave(p0: object, name: string): void;
    shootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: boolean, weaponHash: string | number, ownerPed: MpPed | object, isAudible: boolean, isInvisible: boolean, speed: number): void;
    atan2(p0: number, p1: number): number;
    setBitsInRange(vars: number, rangeStart: number, rangeEnd: number, p3: number): number;
    setBit(address: number, offset: number): number;
    clearAreaOfEverything(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
    setRandomEventFlag(p0: boolean): void;
    hasBulletImpactedInArea(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: boolean): boolean;
    enableMpDlcMaps(toggle: boolean): void;
    terminateAllScriptsWithThisName(scriptName: string): void;
    setOverrideWeather(weatherType: string): void;
    disableStuntJumpSet(p0: number): void;
    clearArea(X: number, Y: number, Z: number, radius: number, p4: boolean, ignoreCopCars: boolean, ignoreObjects: boolean, p7: boolean): void;
    isAreaOccupied(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: object, p12: boolean): boolean;
    setExplosiveAmmoThisFrame(): object;
    isBitSet(address: number, offset: number): boolean;
    startSaveData(p0: object, p1: object, p2: boolean): void;
    atan(p0: number): number;
    setThisScriptCanBePaused(toggle: boolean): void;
    setWind(p0: number): void;
    isPositionOccupied(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: object, p10: boolean): boolean;
    setCreditsActive(toggle: boolean): void;
    setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;
    addStuntJumpAngled(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: object, p18: object): number
    clearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: number): void;
    startSaveStruct(p0: object, p1: number, structName: string): void;
    registerSaveHouse(p0: number, p1: number, p2: number, p3: number, p4: object, p5: object, p6: object): object;
    setMissionFlag(toggle: boolean): void;
    getProfileSetting(profileSetting: number): number;
    setUnkMapFlag(flag: number): void;
    asin(p0: number): number;
    disableHospitalRestart(hospitalIndex: number, toggle: boolean): void;
    isIncidentValid(incidentId: number): number;
    registerBoolToSave(p0: object, name: string): void;
    getGroundZFor3dCoord(x: number, y: number, z: number, groundZ: number, unk: boolean): number;
    setSaveMenuActive(unk: boolean): void;
    isStringNullOrEmpty(string: string): boolean;
    getHashKey(value: string): string | number;
    getRandomIntInRange(startRange: number, endRange: number): number;
    setFadeInAfterDeathArrest(toggle: boolean): void;
    enableDispatchService(dispatchType: MpGameGameplayDispatchType, toggle: boolean): void;
    deleteStuntJump(p0: number): void;
    hasBulletImpactedInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): boolean;
    clearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: number): void;
    isBulletInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean): boolean;
    beginReplayStats(p0: object, p1: object): void;
    enableStuntJumpSet(p0: number): void;
    isPointObscuredByAMissionEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: object): boolean;
    clearBit(address: number, offset: number): number;
    setWindDirection(direction: number): void;
    setWeatherTypeNowPersist(weatherType: string): void;
    registerTextLabelToSave(p0: object, name: string): void;
    setWindSpeed(speed: number): void;
    isProjectileTypeInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: object, p8: boolean): boolean;
    absi(value: number): number;
    usingMissionCreator(toggle: boolean): void;
    getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;
    isStringNull(string: string): boolean;
    getWeatherTypeTransition(p0: object, p1: object, progress_or_time: number): object;
    setFadeInAfterLoad(toggle: boolean): void;
    setWeatherTypeOverTime(weatherType: string, time: number): void;
    setCloudHatTransition(type: string, transitionTime: number): void;
    getFreeStackSlotsCount(stackSize: number): number;
    isSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
    setExplosiveMeleeThisFrame(): object;
}

declare interface MpGameGameplayModelDimension {
    minimum: MpVector3;
    maximum: MpVector3;
}

declare enum MpGameGameplayIncidentType {
    fireDepartment = 3,
    paramedics = 5,
    police = 7,
    pedsInCavalcades = 11,
    merryweather = 14
}

declare enum MpGameGameplayDispatchType {
    policeAutomobile = 1,
    policeHelicopter = 2,
    swatHelicopter = 3,
    fireDepartment = 4,
    swatAutomobile = 5,
    ambulanceDepartment = 6,
    gangs = 7,
    policeRiders = 8,
    policeVehicleRequest = 9,
    policeRoadBlock = 10,
    policeBoat = 11,
    armyVehicle = 12,
}
