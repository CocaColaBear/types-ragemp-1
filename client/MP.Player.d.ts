/// <reference path="../client.d.ts" />

declare interface MpPlayer extends MpEntity {
    readonly isClimbing: boolean;
    readonly action: MpPlayerAction;
    name: string;
    heading: number;
    health: number;
    armour: number;
    readonly isJumping: boolean;
    readonly isInCover: boolean;
    readonly vehicle: boolean;
    readonly isEnteringVehicle: boolean;
    readonly isLeavingVehicle: boolean;
    readonly seat: boolean;
    readonly weapon: object; //TODO: Find type
    readonly isAiming: boolean;
    readonly aimTarget: boolean;
    readonly ping: number;
    readonly ip: string;
    eyeColour: number;
    hairColour: number;
    hairHighlightColour: number;

    setModel(model: string | number): void;
    setTeam(team: number): void;
    changePed(ped: MpPed | object, b2: boolean, b3: boolean): void;
    getWantedCentrePosition(): MpVector3;
    getGroup(): number;
    clearParachuteVariationOverride(): void;
    setForcedAim(toggle: boolean): void;
    clearParachutePackModelOverride(): void;
    setResetFlagPreferRearSeats(flags: number): void;
    getSprintTimeRemaining(): number;
    resetInputGait(): void;
    setMayNotEnterAnyVehicle(): void;
    hasDamagedAtLeastOnePed(): boolean;
    isWantedLevelGreater(wantedLevel: number): boolean;
    setInvincible(toggle: boolean): void;
    setLockonRangeOverride(range: number): void;
    resetArrestState(): void;
    setWeaponDefenseModifier(modifier: number): void;
    isFreeAiming(): boolean;
    getCurrentStealthNoise(): number;
    setPoliceIgnore(toggle: boolean): void;
    setWantedLevelNoDrop(wantedLevel: number, p2: boolean): void;
    getTeam(): number;
    isBeingArrested(atArresting: boolean): boolean;
    setWantedLevel(wantedLevel, disableNoMission): void;
    giveRagdollControl(toggle: boolean): void;
    getSprintStaminaRemaining(): number;
    isDead(): boolean;
    getPed(): MpPed | object;
    isControlOn(): boolean;
    setMeleeWeaponDamageModifier(modifier: number): void;
    clearHasDamagedAtLeastOneNonAnimalPed(): void;
    setVehicleDefenseModifier(modifier: number): void;
    setStealthPerceptionModifier(value: number): void;
    isRidingTrain(): boolean;
    getPedScriptIndex(): MpPed | object;
    setWantedCentrePosition(x: number, y: number, z: number): void;
    setLockon(toggle: boolean): void;
    setHealthRechargeMultiplier(regenRate: number): void;
    getHasReserveParachute(): boolean;
    isPlaying(): boolean;
    getName(): string;
    setCanDoDriveBy(toggle: boolean): void;
    getParachutePackTintIndex(tintIndex: number): number;
    setClothPinFrames(toggle: boolean): void;
    getParachuteTintIndex(tintIndex: MpPlayerParachuteTint): number;
    setForcedZoom(toggle: boolean): void;
    setForceSkipAimIntro(toggle: boolean): void;
    setMaxArmour(value: number): void;
    isTargettingAnything(): boolean;
    setHasReserveParachute(): void;
    setMayOnlyEnterThisVehicle(vehicle: MpVehicle | object): void;
    setParachuteSmokeTrailColor(r: number, g: number, b: number): void;
    clearParachuteModelOverride(): void;
    isScriptControlOn(): boolean;
    setControl(toggle: boolean, possiblyFlags: number): void;
    setEveryoneIgnore(toggle: boolean): void;
    isReadyForCutscene(): boolean;
    getMaxArmour(): number;
    setParachutePackTintIndex(tintIndex: number): void;
    setParachuteModelOverride(model: number | string): void;
    setSprint(toggle: boolean): void;
    getUnderwaterTimeRemaining(): number;
    setParachuteTintIndex(tintIndex: MpPlayerParachuteTint): void;
    setVehicleDamageModifier(damageAmount: number): void;
    resetStamina(): void;
    setReserveParachuteTintIndex(tintIndex: MpPlayerParachuteTint): void;
    setSneakingNoiseMultiplier(multiplier: number): void;
    clearWantedLevel(): void;
    getInvincible(): boolean;
    setSimulateAiming(toggle: boolean): void;
    setWeaponDamageModifier(damageAmount: number): void;
    setCanUseCover(toggle: boolean): object;
    hasLeftTheWorld(): boolean;
    getReserveParachuteTintIndex(tintIndex: MpPlayerParachuteTint): number;
    setCanBeHassledByGangs(toggle: boolean): void;
    hasBeenSpottedInStolenVehicle(): boolean;
    setParachuteVariationOverride(p1: number, p2: object, p3: object, p4: boolean): void;
    setNoiseMultiplier(multiplier: number): void;
    setParachutePackModelOverride(model: number | string): void;
    isFreeForAmbientTask(): boolean;
    setWantedLevelNow(p1: boolean): void;
    hasTeleportFinished(): boolean;
    getWantedLevel(): number;
    hasDamagedAtLeastOneNonAnimalPed(): boolean;
    getRgbColour(r: number, g: number, b: number): MpRgbColor;
    getParachuteSmokeTrailColor(r: number, g: number, b: number): MpRgbColor;
    clearHasDamagedAtLeastOnePed(): void;
    canPedHear(ped: MpPed | object): boolean;
    removeHelmet(p2: boolean): object;
    setCanLeaveParachuteSmokeTrail(enabled: boolean): void;
    isPressingHorn(): boolean;
    isUsingActionMode(): boolean;
    setMinMoveBlendRatio(value: number): void;
    setRagdollForceFall(): object;
    isOnFoot(): boolean;
    setAsEnemy(toggle: boolean): void;
    setDucking(toggle: boolean): void;
    getTextureVariation(componentId: number): number;
    setTargetLossResponse(responseType: number): void;
    setMoveRateOverride(value: number): void;
    clearProp(propId: number): void;
    setMotionBlur(toggle: boolean): void;
    isInAnyPoliceVehicle(): boolean;
    setGroupMemberPassengerIndex(index: number): void;
    clearDecorations(): void;
    setCanPlayAmbientBaseAnims(toggle: boolean): void;
    setToInformRespectedFriends(radius: number, maxFriends: number): void;
    isVaulting(): boolean;
    wasSkeletonUpdated(): boolean;
    wasSkeletonUpdated(): boolean;
    canRagdoll(): boolean;
    setBlendFromParents(p1: object, p2: object, p3: number, p4: number): void;
    setSteersAroundObjects(toggle: boolean): void;
    forceToOpenParachute(): void;
    getCauseOfDeath(): number | string;
    getBoneCoords(boneId: number, offsetX: number, offsetY: number, offsetZ: number): MpVector3;
    getMeleeTargetFor(): MpPed | object;
    setConfigFlag(flagId: MpPlayerPedConfigFlags, value: boolean): void;
    isUsingScenario(scenario: string): boolean;
    isHangingOnToVehicle(): boolean;
    setCanSmashGlass(p1: boolean, p2: boolean): void;
    getTimeOfDeath(): number;
    resetStrafeClipset(): void;
    getRagdollBoneIndex(bone: number): number;
    resetInVehicleContext(): void;
    getNearbyPeds(sizeAndPeds: number, ignore: number): number;
    isReloading(): boolean;
    setWeaponMovementClipset(clipSet: string): void;
    setComponentVariation(componentId: number, drawableId: number, textureId: number, paletteId: MpPlayerPedVariationData): void;
    setRagdollFlag(flag: number): void;
    setHelmetPropIndex(propIndex: number): void;
    getHeadBlendData(headBlendData: MpPlayerHeadBlendData): void;
    getNumberOfDrawableVariations(componentId: number): void;
    setSweat(sweat: number): void;
    isInAnyHeli(): boolean;
    setStrafeClipset(clipSet: string): void;
    setDiesInVehicle(toggle: boolean): void;
    setAsGroupLeader(groupId: number): void;
    isRunningMobilePhoneTask():boolean;
    isPropValid(componentId: number, drawableId: number, TextureId: number): boolean;
    getFloodInvincibility(p1: boolean): void;
    explodeHead(weaponHash: number | string): void;
    setVisualFieldMinAngle(value: number): void;
    isInAnyBoat(): boolean;
    setCanTeleportToGroupLeader(groupHandle: number, toggle: boolean): void;
    registerTarget(target: MpPed | object): void;
    applyBloodByZone(p1: object, p2: number, p3: number, p4: object): void;
    isDeadOrDying(p1: boolean): boolean;
    setToLoadCover(toggle: boolean): void;
    setHearingRange(value: number): void;
    isShooting(): boolean;
    setCapsule(value: number): void;
    getAccuracy(): number;
    applyDamageDecal(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: string): void;
    isAimingFromCover(): boolean;
    resetVisibleDamage(): object;
    setVisualFieldCenterAngle(angle: number): void;
    setAllowVehiclesOverride(toggle: boolean): void;
    getDefensiveAreaPosition(p1: boolean): MpVector3;
    setCombatRange(p1: number): void;
    setNeverLeavesGroup(toggle: boolean): void;
    getBoneIndex(boneId: number): number;
    getMoney(): number;
    setDefensiveAreaDirection(p1: number, p2: number, p3: number, p4: boolean): void;
    isEvasiveDiving(evadingEntity: MpEntity | object): boolean;
    getRelationshipGroupDefaultHash(): number | string;
    setCanBeTargetedWithoutLos(toggle: boolean): void;
    setMaxMoveBlendRatio(value: number): void;
    isJumpingOutOfVehicle(): boolean;
    setMaxTimeInWater(value: number): void;
    registerheadshot(): object;
    setWetnessHeight(height: number): object;
    isTryingToEnterALockedVehicle(): boolean;
    knockOffVehicle(): void;
    setDefaultComponentVariation(): void;
    isOnMount(): boolean;
    applyDamagePack(damagePack: string, damage: number, mult: number): void;
    setSteersAroundPeds(toggle: boolean): void;
    getMaxHealth(): number;
    isRagdoll(): boolean;
    isInCombat(target: MpPed | object): boolean;
    setHeadOverlay(overlayID: number, index: number, opacity: number): void;
    setHeadOverlayColor(overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
    isJacking(): boolean;
    clearDriveByClipsetOverride(): void;
    isTracked(): boolean;
    setHairColor(colorID: number, highlightColorID: number): void;
    setCombatMovement(combatMovement: MpPlayerCombatMovement): void;
    isInMeleeCombat(): boolean;
    setDefensiveAreaAttachedToPed(attachPed: MpPed | object, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean, p10: boolean): void;
    setBoundsOrientation(p1: number, p2: number, p3: number, p4: number, p5: number): void;
    isBeingStunned(p1: number): boolean;
    setEyeColor(index: number): void;
    canKnockOffVehicle(): boolean;
    clearDamageDecalByZone(p1: number, p2: string): void;
    getCombatFloat(ped: MpPed,p1: MpPlayerCombatFloat): number
    setInVehicleContext(context: number | string): void;
    isStopped(): boolean;
    getJackTarget(): MpPed | object;
    giveHelmet(cannotRemove: boolean, helmetFlag: number, textureIndex: number): void;
    isDiving(): boolean;
    setHelmet(canWearHelmet: boolean): void;
    setFacialDecoration(collection: number | string, overlay: number | string): void;
    setDiesInWater(toggle: boolean): void;
    clearBloodDamageByZone(p1: number): void;
    isUsingAnyScenario(): boolean;
    isInGroup(): boolean;
    setScriptedAnimSeatOffset(p1: number): void;
    isHurt(): boolean;
    setDiesWhenInjured(toggle: boolean): object;
    isHeadtrackingPed(ped2: MpPed | object): boolean;
    setDecoration(collection: number | string, overlay: number | string): void;
    getNumberOfPropDrawableVariations(propId: number): number;
    isInAnyPlane(): boolean;
    getVehicleIsUsing(): MpVehicle | object;
    setShootRate(shootRate: number): void;
    hideBloodDamageByZone(p1: object, p2: boolean): void;
    setCanPlayAmbientAnims(toggle: boolean): void;
    setCanBeTargetedWhenInjured(toggle: boolean): void;
    setCanBeTargetted(toggle: boolean): void;
    hasHeadBlendFinished(): boolean;
    setCanBeTargettedByPlayer(player: MpPlayer, toggle: boolean): void;
    isOnVehicle(): boolean;
    getDrawableVariation(componentId: number): number;
    applyDamageTo(damageAmount: number, p2: boolean): void;
    getPlayerIsFollowing(): MpPlayer;
    setCanEvasiveDive(toggle: boolean): void;
    setMaxTimeUnderwater(value: number): void;
    setCanArmIk(toggle: boolean): void;
    isMale(): boolean;
    isInAnyTaxi(): boolean;
    isScriptedScenarioUsingConditionalAnim(animDict: string, anim: string): boolean;
    getSeatIsTryingToEnter(): number;
    isInAnyTrain(): boolean;
    knockOffProp(p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;
    setVisualFieldMaxAngle(value: number): void;
    setFleeAttributes(attributes: number, p2: boolean): void;
    setFaceFeature(index: number, scale: number): void;
    resurrect(): void;
    getDecorationsState(): object;
    updateHeadBlendData(shapeMix: number, skinMix: number, thirdMix: number): void;
    clearFacialIdleAnimOverride(): void;
    setCanLegIk(toggle: boolean): void;
    removeDefensiveArea(toggle: boolean): void;
    setVisualFieldMaxElevationAngle(angle: number): void;
    isInModel(modelHash: number | string): boolean;
    getParachuteState(): number;
    setVisualFieldMinElevationAngle(angle: number): void;
    setCanBeKnockedOffVehicle(state: MpPlayerCanBeKnockedOffVehicle): void;
    setAccuracy(accuracy: number): object;
    getRelationshipGroupHash(): number | string;
    isInParachuteFreeFall(): boolean;
    isShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean): boolean;
    getConfigFlag(flagId: number, p2: boolean): boolean;
    wasKilledByTakedown(): boolean;
    setGeneratesDeadBodyEvents(toggle: boolean): void;
    isHeadtracking(entity: MpEntity | object): boolean;
    getVehicleIsTryingToEnter(): MpVehicle | object;
    applyBloodDamageByZone(p1: object, p2: number, p3: number, p4: object): void;
    isSittingInAnyVehicle(): boolean;
    applyBlood(boneIndex: number, xRot: number, yRot: number, zRot: number, woundType: string): void;
    setPreferredCoverSet(itemSet: object): void;
    isInCoverFacingLeft(): boolean;
    isInjured(): boolean;
    isBeingStealthKilled(): boolean;
    setCoordsNoGang(posX: number, posY: number, posZ: number): void;
    setStealthMovement(p1: boolean, action: string): void;
    getPropIndex(componentId: number): number;
    getParachuteLandingType(): number;
    reviveInjured(): void;
    clearLastDamageBone(): void;
    getNumberOfTextureVariations(componentId: number, drawableId: number): number;
    clearBloodDamage(): void;
    setAlternateMovementAnim(stance: MpPlayerStance, animDictionary: string, animationName: string, p4: number, p5: boolean)
    isInFlyingVehicle(): boolean;
    isTrackedVisible(): boolean;
    registerHatedTargetsAround(radius: number): void;
    setPropIndex(componentId: number,drawableId: MpPlayerPedPropsData, TextureId: number, attach: boolean): void;
    getSourceOfDeath(): MpEntity | object;
    setHeadBlendData(shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void;
    isOnAnyBike(): boolean;
    getArmour(): number;
    setPlaysHeadOnHornAnimWhenDiesInVehicle(toggle: boolean): void;
    setShootsAtCoord(x: number, y: number, z: number, toggle: boolean): void;
    unregisterheadshot(): void;
    setKeepTask(toggle: boolean): void;
    setEnableWeaponBlocking(toggle: boolean): object;
    resetWeaponMovementClipset(): void;
    setNameDebug(name: string): void;
    isInAnyVehicle(atGetIn: boolean): boolean;
    isBeingJacked(): boolean;
    getVehicleIsIn(getLastVehicle: boolean): MpVehicle | object;
    setFiringPattern(patternHash: number | string): void;
    setCoordsKeepVehicle(posX: number, posY: number, posZ: number): void;
    getsJacker(): MpPed | object;
    isGroupMember(groupId: number): boolean;
    getEnveffScale(): number;
    clearWetness(): object;
    setVisualFieldPeripheralRange(range: number): void;
    setSphereDefensiveArea(x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean): void;
    isSwimming(): boolean;
    setMoveAnimsBlendOut(): void;
    setAsGroupMember(groupId: number): void;
    isGoingIntoCover(): boolean;
    setCombatAttributes(attributeIndex: MpPlayerCombatAttributes, enabled: boolean): void;
    setBlockingOfNonTemporaryEvents(toggle: boolean): void;
    resetRagdollTimer(): void;
    setGravity(toggle: boolean): void;
    isInVehicle(vehicle: MpVehicle | object, atGetIn: boolean): void;
    setCowerHash(p1: string): void;
    getHeadOverlayValue(overlayID: number): number;
    getNumberOfPropTextureVariations(propId: number, drawableId: number): number;
    setDriverAggressiveness(aggressiveness: number): void;
    isSittingInVehicle(vehicle: MpVehicle | object): boolean;
    setMoney(amount: number): void;
    setDesiredHeading(heading: number): void;
    resetMovementClipset(p1: number): void;
    setPinnedDown(pinned: boolean, i: number): object;
    setRelationshipGroupDefaultHash(hash: number | string): void;
    setToRagdoll(time1: number, time2: number, ragdollType: MpPlayerRagdollTypes, p4: boolean, p5: boolean, p6: boolean): boolean;
    setMovementClipset(clipSet: string, p2: number): void;
    getResetFlag(flagId: number): boolean;
    setCanRagdoll(toggle: boolean): void;
    giveNmMessage(): void;
    setDriverAbility(ability: number): void;
    isDoingDriveby(): boolean;
    setCanAttackFriendly(toggle: boolean, p2: boolean): void;
    setWetnessEnabledThisFrame(): void;
    isHuman(): boolean;
    setCanPlayGestureAnims(toggle: boolean): void;
    setAsCop(toggle: boolean): void;
    isGettingIntoAVehicle(): boolean;
    resetLastVehicle(): void;
    isFleeing(): boolean;
    setGetOutUpsideDownVehicle(toggle: boolean): void;
    setCanBeTargettedByTeam(team: number, toggle: boolean): void;
    setEnveffScale(value: number): void;
    isSwimmingUnderWater(): boolean;
    setHelmetFlag(helmetFlag: number): void;
    setCanHeadIk(toggle: boolean): void;
    stopWeaponFiringWhenDropped(): void;
    setCanBeDraggedOut(toggle: boolean): void;
    setResetFlag(flagId: number, doReset: boolean): void;
    setIkTarget(p1: number, targetPed: MpPed | object, boneLookAt: number, x: number, y: number, z: number, p7: object, duration: number, duration1: number): void;
    setLegIkMode(mode: number): void;
    setRandomProps(): void;
    setCanPeekInCover(toggle: boolean): void;
    setEnableBoundAnkles(toggle: boolean): void;
    isPlantingBomb(): boolean;
    setCombatAbility(p1: MpPlayerCombatAbility): void;
    setCanBeShotInVehicle(toggle: boolean): void;
    setAngledDefensiveArea(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: boolean): void;
    setRelationshipGroupHash(hash: number | string): void;
    setRandomComponentVariation(p1: boolean): void;
    isModel(modelHash: number | string): boolean;
    setCanCowerInCover(toggle: boolean): void;
    setPrimaryLookat(lookAt: MpPed | object): void;
    getDeadPickupCoords(p1: number, p2: number): MpVector3;
    clearAllProps(): void;
    setArmour(amount: number): void;
    getNearbyVehicles(sizeAndVehs: number): number;
    isDucking(): boolean;
    setEnableEnveffScale(toggle: boolean): void;
    isProne(): boolean;
    isFacingPed(otherPed: MpPed | object, angle: number): boolean;
    setDiesInSinkingVehicle(toggle: boolean): void;
    getLastDamageBone(outBone: number): number;
    setUsingActionMode(p1: boolean, p2: object, action: string): void;
    isFatallyInjured(): boolean;
    setResetRagdollFlag(flag: number): void;
    clearAlternateMovementAnim(stance: number, p2: number): void;
    setAllowedToDuck(toggle: boolean): void;
    setAlertness(value:number): void;
    setLodMultiplier(multiplier: number): void;
    setGestureGroup(p1: object): void;
    getCombatMovement(): number;
    setEnableHandcuffs(toggle: boolean): void;
    setCanRagdollFromPlayerImpact(toggle: boolean): void;
    isConversationDead(): boolean;
    getExtractedDisplacement(worldSpace: boolean): MpVector3;
    getPropTextureIndex(componentId: number): number;
    setModelIsSuppressed(toggle: boolean): void;
    playFacialAnim(animName: string, animDict: string): void;
    clearFacialDecorations(): void;
    isRunningRagdollTask(): boolean;
    getPaletteVariation(componentId: number): number;
    getMount(): MpPed | object;
    isComponentVariationValid(componentId: number, drawableId: number, textureId: number): void;
    cloneToTarget(ped2: MpPed | object): void;
    canInCombatSeeTarget(target: MpPed | object): boolean;
    setSteersAroundVehicles(toggle: boolean): void;
    getRelationshipBetweens(ped2: MpPed | object): void;
    setSuffersCriticalHits(toggle: boolean): void;
    setCanUseAutoConversationLookat(toggle: boolean): void;
    isOnSpecificVehicle(vehicle: MpVehicle | object): boolean;
    setDriveByClipsetOverride(clipset: string): void;
    removeFromGroup(): void;
    setCanSwitchWeapon(toggle: boolean): void;
    setStayInVehicleWhenJacked(toggle: boolean): void;
    setDiesInstantlyInWater(toggle: boolean): void;
    applyBloodSpecific(p1: object, p2: number, p3: number, p4: number, p5: number, p6: object, p7: number, p8: object): void;
    clone(heading: number, networkHandle: boolean, pedHandle: boolean): MpPed | object;
    setRagdollOnCollision(toggle: boolean): void;
    setIdRange(value: number): void;
    setHelmetTextureIndex(textureIndex: number): void;
    getGroupIndex(): number;
    forceMotionState(motionStateHash: number | string, p2: boolean, p3: boolean, p4: boolean): boolean;
    setSeeingRange(value: number): void;
    setCanTorsoIk(toggle: boolean): void;
    isWearingHelmet(): boolean;
    setMaxHealth(value: number): void;
    getAlertness(): number;
    setIntoVehicle(vehicle: MpVehicle | object, seatIndex: number): void;
    setCanPlayVisemeAnims(p1: boolean, p2: boolean): void;
    setExclusivePhoneRelationships(): MpVehicle | object;
    wasKilledByStealth(): boolean;
    setEnableScuba(toggle: boolean): void;
    setDefensiveSphereAttachedToPed(p1: object, p2: number, p3: number, p4: number, p5: number, p6: boolean): void;
    getCombatRange(): object;
    setMinGroundTimeForStungun(ms: number): void;
    isFalling(): boolean;
    isInAnySub(): boolean;
    isPerformingStealthKill(): boolean;
    removePreferredCoverSet(): void;
    getType(): number;
    setCombatFloat(combatType: number, p2: number): void;
    setFacialIdleAnimOverride(animName: string, animDict: string): void;
    getSequenceProgress(): number;
    setParachuteTaskThrust(thrust: number): void;
    taskRappelFromHeli(p1: number): void;
    taskJump(unused: boolean): void;
    taskVehiclePark(vehicle: MpVehicle | object, x: number, y: number, z: number, heading: number, mode: number, radius: number, keepEngineOn: boolean): void;
    taskClearLookAt(): void;
    taskVehicleEscort(vehicle: MpVehicle | object, targetVehicle: MpVehicle | object, mode: MpPlayerVehicleEscortModes, speed: number, drivingStyle: number, minDistance: number, p7: number, noRoadsDistance: number): void;
    taskVehicleShootAt(target: MpPed | object, p2: number): void;
    taskGoToCoordWhileAimingAtCoord(x: number, y: number, z: number, aimAtX: number, aimAtY: number, aimAtZ: number, moveSpeed: number, p8: boolean, p9: number, p10: number, p11: boolean, flags: object, p13: boolean, firingPattern: number | string): void;
    taskScriptedAnimation(p1: object, p2: object, p3: object, p4: number, p5: number): void;
    taskStartScenarioInPlace(scenarioName: string, unkDelay: number, playEnterAnim: boolean): void;
    taskVehicleDriveToCoordLongrange(vehicle: MpVehicle | object, x: number, y: number, z: number, speed: number, driveMode: number, stopRange: number): void;
    taskBoatMission(boat: MpVehicle | object, p2: object, p3: object, x: number, y: number, z: number, p7: object, maxSpeed: number, p9: object, p10: number, p11: object): void;
    taskFollowNavMeshToCoord(x: number, y: number, z: number, speed: number, timeout: number, stoppingRange: number, persistFollowing: boolean, unk: number): void;
    clearSecondaryTask(): void;
    taskFollowNavMeshToCoordAdvanced(x: number, y: number, z: number, speed: number, timeout: number, unkFloat: number, unkInt: number, unkX: number, unkY: number, unkZ: number, unk2: number): void;
    taskVehicleGotoNavmesh(vehicle: MpVehicle | object, x: number, y: number, z: number, speed: number, behaviorFlag: number, stoppingRange: number): void;
    taskPutDirectlyIntoMelee(meleeTarget: MpPed | object, p2: number, p3: number, p4: number, p5: boolean): void;
    taskGoToCoordAnyMeansExtraParams(x: number, y: number, z: number, speed: number, p5: object, p6: boolean, walkingStyle: number, p8: number, p9: object, p10: object, p11: object): void;
    taskTurnToFaceCoord(x: number, y: number, z: number, duration: number): void;
    taskVehicleHeliProtect(vehicle: MpVehicle | object, entityToFollow: MpEntity | object, targetSpeed: number, p4: number, radius: number, altitude: number, p7: number): void;
    setDesiredMoveBlendRatio(p1: number): void;
    getPhoneGestureAnimTotalTime(): number;
    taskSweepAim(anim: string, p2: string, p3: string, p4: string, p5: number, vehicle: MpVehicle | object, p7: number, p8: number): void;
    taskSmartFlee(fleeTarget: MpPed | object, distance: number, fleeTime: object, p4: boolean, p5: boolean): void;
    taskPlaneMission(plane: MpVehicle | object, targetVehicle: MpVehicle | object, targetPed: MpPed | object, destinationX: number, destinationY: number, destinationZ: number, p7: number, physicsSpeed: number, p9: number, p10: number, maxAltitude: number, minAltitude: number): void;
    isMoveBlendRatioSprinting(): boolean;
    hasUseScenarioTask(): boolean;
    isGettingUp(): boolean;
    taskPlaneChase(entityToFollow: MpEntity | object, x: number, y: number, z: number): void;
    taskMoveNetwork(task: string, multiplier: number, p3: boolean, animDict: string, flags: number): void;
    taskDriveBy(targetPed: MpPed | object, p2: object, targetX: number, targetY: number, targetZ: number, p6: number, p7: object, p8: boolean, firingPattern: number | string): void;
    taskFollowToOffsetOf(entity: MpEntity | object, offsetX: number, offsetY: number, offsetZ: number, movementSpeed: number, timeout: number, stoppingRange: number, persistFollowing: boolean): void;
    taskVehicleFollowWaypointRecording(vehicle: MpVehicle | object, WPRecording: string, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: number): void;
    isMoveBlendRatioStill(): boolean;
    setPathPreferToAvoidWater(avoidWater: boolean): void;
    taskSeekCoverToCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: object, p8: boolean): void;
    taskVehicleChase(targetEnt: MpEntity | object): void;
    isRunningArrestTask(): boolean;
    taskCower(duration: number): void;
    taskStopPhoneGestureAnimation(): void;
    taskPutDirectlyIntoCover(x: number, y: number, z: number, timeout: object, p5: boolean, p6: number, p7: boolean, p8: boolean, p9:object, p10: boolean): void;
    setPathAvoidFire(avoidFire: boolean): void;
    taskShockingEventReact(eventHandle: number): void;
    taskShootAtCoord(x: number, y: number, z: number, duration: number, firingPattern: number | string): void;
    getPhoneGestureAnimCurrentTime(): number;
    taskVehicleDriveWander(vehicle: MpVehicle | object, speed: number, drivingStyle: number): void;
    taskGuardCurrentPosition(p1: number, p2: number, p3: number): void;
    taskCombatHatedTargetsInArea(x: number, y: number, z: number, radius: number, p5: object): void;
    taskForceMotionState(state: number | string, p2: boolean): void;
    taskLeaveAnyVehicle(p1: number, p2: number): void;
    isSprinting(): boolean;
    taskUseNearestScenarioToCoordWarp(x: number, y: number, z: number, radius: number, p5: object): void;
    taskFollowPointRoute(speed: number, unknown: number): void;
    taskSlideToCoordHdgRate(x: number, y: number, z: number, heading: number, p5: number, p6: number): void;
    taskPerformSequence(taskSequence: MpObject | object): object;
    taskTurnToFace(entity: MpEntity | object, duration: number): void;
    taskGoToCoordAnyMeans(x: number, y: number, z: number, speed: number, p5: object, p6: boolean, walkingStyle: number, p8: number): void;
    setDriveTaskCruiseSpeed(cruiseSpeed: number): void;
    addVehicleSubtaskAttackCoord(x: number, y: number, z: number): void;
    taskUseMobilePhoneTimed(duration: number): void;
    taskSkyDive(): void;
    taskReloadWeapon(doReload: boolean): void;
    setTaskVehicleChaseIdealPursuitDistance(distance: number): void;
    taskAimGunAtCoord(x: number, y: number, z: number, time: number, p5: boolean, p6: boolean): void;
    uncuff(): void;
    taskLookAt(lookAt: MpEntity | object, duration: number, unknown1: number, unknown2: number): void;
    taskReactAndFlee(fleeTarget: MpPed | object): void;
    playAnimOnRunningScenario(animDict: string, animName: string): void;
    isCuffed(): boolean;
    setPathCanUseLadders(Toggle: boolean): object;
    getScriptTaskStatus(taskHash: number | string): number;
    taskAimGunScripted(scriptTask: number | string, p2: boolean, p3: boolean): void;
    taskShuffleToNextVehicleSeat(vehicle: MpVehicle | object): void;
    taskCombatHatedTargetsAround(radius: number, p2: number): void;
    taskPlayAnimAdvanced(animDict: string, animName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, speed: number, speedMultiplier: number, duration: number, flag: object, animTime: number, p14: object, p15: object): void;
    taskSeekCoverFrom(target: MpPed | object, duration: number, p3: boolean): void;
    getDesiredMoveBlendRatio(): number;
    addVehicleSubtaskAttack(ped2: MpPed | object): void;
    isDrivebyTaskUnderneathDrivingTask(): boolean;
    taskClimb(unused: boolean): void;
    taskChatTo(target: MpPed | object, p2: object, p3: number, p4: number, p5: number, p6: number, p7: number): void;
    setHighFallTask(p1: object, p2: object, p3: object): void;
    setPathCanUseClimbovers(Toggle: boolean): object;
    taskPlayPhoneGestureAnimation(p1: object, p2: object, p3: object, p4: number, p5: number, p6: boolean, p7: boolean): void;
    taskSetBlockingOfNonTemporaryEvents(toggle: boolean): void;
    taskStandStill(time: number): void;
    taskAchieveHeading(heading: number, timeout: number): void;
    taskVehicleMissionTarget(vehicle: MpVehicle | object, pedTarget: MpPed | object, mode: number, maxSpeed: number, drivingStyle: number, minDistance: number, p7: number, p8: boolean): void;
    taskSmartFleeCoord(x: number, y: number, z: number, distance: number, time: number, p6: boolean, p7: boolean): void;
    taskOpenVehicleDoor(vehicle: MpVehicle | object, timeOut: number, doorIndex: number, speed: number): void;
    taskPlantBomb(x: number, y: number, z: number, heading: number): void;
    updateTaskAimGunScriptedTarget(p1: MpPed | object, p2: number, p3: number, p4: number, p5: boolean): void;
    taskGoToWhileAimingAtEntity(entityToWalkTo: MpEntity | object, entityToAimAt: MpEntity | object, speed: number, shootatEntity: boolean, p5: number, p6: number, p7: boolean, p8: boolean, firingPattern: number | string): void;
    stopAnimTask(animDictionary: string, animationName: string, p3: number): void;
    taskWarpIntoVehicle(vehicle: MpVehicle | object, seat: number): void;
    taskAimGunAt(entity: MpEntity | object, duration: number, p3: boolean): void;
    taskGetOffBoat(boat: MpVehicle | object): void;
    taskSwapWeapon(p1: boolean): void;
    isMountedWeaponTaskUnderneathDrivingTask(): boolean;
    taskGoToCoordAndAimAtHatedEntitiesNearCoord(gotoX: number, gotoY: number, gotoZ: number, aimNearX: number, aimNearY: number, aimNearZ: number, speed: number, shoot: boolean, unknown1: number, unknown2: number, unkTrue: boolean, unknown3: number, heading: boolean, firingPattern: number | string): void;
    updateTaskHandsUpDuration(duration: number): void;
    taskGotoAiming(target: MpEntity | object, distanceToStopAt: number, StartAimingDist: number): void;
    isActiveInScenario(): boolean;
    taskStealthKill(target: MpPed | object, killType: number | string, p3: number, p4: boolean): object;
    clearTasksImmediately(): void;
    isStill(): boolean;
    taskHeliChase(entityToFollow: MpEntity | object, x: number, y: number, z: number): void;
    taskStandGuard(x: number, y: number, z: number, heading: number, scenarioName: string): void;
    getIsTaskActive(taskNumber: number): boolean;
    taskParachuteToTarget(x: number, y: number, z: number): void;
    taskClimbLadder(p1: number): void;
    isPlayingPhoneGestureAnim(): boolean;
    taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(x: number, y: number, z: number, speed: number, p5: object, p6: boolean, walkingStyle: number, p8: number, p9: object, p10: object, p11: object, p12: object): void;
    taskWanderStandard(p1: number, p2: number): void;
    taskUseMobilePhone(p1: number): void;
    taskPatrol(p1: string, p2: object, p3: boolean, p4: boolean): void;
    taskPlaneLand(plane: MpVehicle | object, runwayStartX: number, runwayStartY: number, runwayStartZ: number, runwayEndX: number, runwayEndY: number, runwayEndZ: number): void;
    taskEnterVehicle(vehicle: MpVehicle | object, timeout: number, seat: number, speed: number, p5: number, p6: object): void;
    setParachuteTaskTarget(x: number, y: number, z: number): void;
    clearDrivebyTaskUnderneathDrivingTask(): void;
    taskVehicleTempAction(vehicle: MpVehicle | object, action: MpPlayerVehicleActions, time: number): void;
    isRunning(): boolean;
    getNavmeshRouteDistanceRemaining(p1: object, p2: object): object;
    taskGuardSphereDefensiveArea(p1: number, p2: number, p3: number, p4: number, p5: number, p6: object, p7: number, p8: number, p9: number, p10: number): void;
    setTaskVehicleChaseBehaviorFlag(flag: number, set: boolean): void;
    setMountedWeaponTarget(targetEntity: MpEntity | object, p2: object, x: number, y: number, z: number): void;
    taskWrithe(target: MpPed | object, time: number, p3: number): void;
    taskSlideToCoord(x: number, y: number, z: number, heading: number, p5: number): void;
    taskParachute(p1: boolean): void;
    taskLeaveVehicle(vehicle: MpVehicle | object, flags: number): void;
    isMoveBlendRatioRunning(): boolean;
    taskMoveNetworkAdvanced(p1: string, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: object, p9: number, p10: boolean, animDict: string, flags: number): void;
    taskGoStraightToCoord(x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void;
    setDriveTaskDrivingStyle(drivingStyle: number): void;
    taskHeliMission(vehicle: MpVehicle | object, p2: object, pedToFollow: MpPed | object, posX: number, posY: number, posZ: number, mode: number, speed: number, radius: number, angle: number, p11: number, height: number, p13: number, p14: number): void;
    controlMountedWeapon(): boolean;
    isWalking(): boolean;
    isInWrithe(): boolean;
    taskWanderInArea(x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;
    clearTasks(): void;
    taskVehicleDriveToCoord(vehicle: MpVehicle | object, x: number, y: number, z: number, speed: number, p6: object, vehicleModel: number | string, drivingMode: number, stopRange: number, p10: number): void;
    setPathCanDropFromHeight(Toggle: boolean): void;
    taskGotoOffset(p1: object, p2: object, x: number, y: number, z: number, duration: number): void;
    taskVehicleAimAt(target: MpPed | object): void;
    isStrafing(): boolean;
    updateTaskSweepAim(entity: MpEntity | object): void;
    taskStayInCover(): void;
    taskPause(ms: number): void;
    taskPlayAnim(animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: MpPlayerEAnimationFlags, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void;
    taskSetDecisionMaker(p1: number | string): void;
    stopAnimPlayback(p1: object, p2: boolean): void;
    taskSynchronizedScene(scene: number, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: object): void;
    taskVehicleMissionCoorsTarget(vehicle: MpVehicle | object, x: number, y: number, z: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean): void;
    isMoveBlendRatioWalking(): boolean;
    taskCombat(targetPed: MpPed | object, p2: number, p3: number): void;
    taskHandsUp(duration: number, facingPed: MpPed | object, p3: number, p4: boolean): void;
    setPathsWidthPlant(mayEnterWater: boolean): void;
    taskArrest(target: MpPed | object): void;
    taskStartScenarioAtPosition(scenarioName: string, x: number, y: number, z: number, heading: number, p6: object, p7: boolean, p8: boolean): void;
    taskVehicleFollow(vehicle: MpVehicle | object, targetEntity: MpEntity | object, drivingStyle: MpPlayerDrivingStyles, speed: number, minDistance: number): void;
}

declare interface MpPlayerPool extends MpPool<MpPlayer> {

}

declare interface MpRgbColor {
    r: number;
    g: number;
    b: number;
}

declare interface MpPlayerHeadBlendData {
    shapeFirst: number;
    shapeSecond: number;
    shapeThird: number;
    skinFirst: number;
    skinSecond: number;
    skinThird: number;
    shapeMix: number;
    skinMix: number;
    thirdMix: number;

}

declare enum MpPlayerParachuteTint {
    none = -1,
    rainbow = 0,
    red = 1,
    seasideStripes = 2,
    widowMaker = 3,
    patriot = 4,
    blue = 5,
    black = 6,
    hornet = 7,
    airFocce = 8,
    desert = 9,
    shadow = 10,
    highAltitude = 11,
    airbone = 12,
    sunrise = 13
}

declare enum MpPlayerCrimeType {
    firearmsPossession = 1,
    personRunningARedLight = 2,
    recklessDriver = 3,
    speedingVehicle= 4,
    trafficViolation = 5,
    motorcycleRiderWithoutAHelmet = 6,
    vehicleTheft = 7,
    grandTheftAuto = 8,
    unk = 9,
    unk2 = 10,
    assaultOnACivilian = 11,
    assaultOnAnOfficer = 12,
    assaultWithADeadlyWeapon = 13,
    officerShot = 14,
    pedestrianStruckByAVehicle = 15,
    officerStruckByAVehicle = 16,
    helicopterDown = 17,
    civilianOnFire = 18,
    officerSetOnFire = 19,
    carOnFire = 20,
    airUnitDown = 21,
    anExplosion = 22,
    aStabbing = 23,
    officerStabbed = 24,
    attackOnAVehicle = 25,
    damageToProperty = 26,
    suspectThreateningOfficerWithAFirearm = 27,
    shotsFired = 28,
    unk3 = 29,
    unk4 = 30,
    unk5 = 31,
    unk6 = 32,
    unk7 = 33,
    unk8 = 34,
    unk9 = 35,
    unk10 = 36,
    unk11 = 37,
    unk12 = 38,
    unk13 = 39,
    unk14 = 40,
    unk15 = 41,
    unk16 = 42,
    possibleDisturbance = 43,
    civilianInNeedOfAssistance = 44,
    unk17 = 45,
    unk18 = 46
}

declare enum MpPlayerAction {
    climbing = 'climbing',
    in_cover = 'in_cover',
    aiming_from_cover = 'aiming_from_cover',
    diving = 'diving',
    entering_vehicle = 'entering_vehicle',
    exiting_vehicle = 'exiting_vehicle',
    jumping = 'jumping',
    moving = 'moving',
    moving_aiming = 'moving_aiming',
    moving_reloaing = 'moving_reloaing',
    parachuting = 'parachuting',
    ragdoll = 'ragdoll',
    aiming = 'aiming',
    reloading = 'reloading',
    stopped = 'stopped',
}

declare enum MpPlayerPedConfigFlags
{
    flagCanFlyThruWindscreen = 32,
    flagDiesByRagdoll = 33,
    flagNoCollision = 52,
    flagNoCollide = 62,
    flagDead = 71,
    flagIsSniperScopeActive = 72,
    flagSuperDead = 73,
    flagIsAiming = 78,
    flagDrunk = 100,
    flagNoPlayerMelee = 122,
    flagNmMessage466 = 125,
    flagInjuredLimp = 166,
    flagInjuredLimp2 = 170,
    flagInjuredDown = 187,
    flagShrink = 223,
    flagMeleeCombat = 224,
    flagNoWrithe = 281,
    flagFreeze = 292,
    flagIsStill = 301,
    flagNoPlayerMelee2 = 314,
    flagAlpha = 410,
}

declare enum MpPlayerPedVariationData {
    playerVariationFace = 0,
    playerVariationHead = 1,
    playerVariationHair = 2,
    playerVariationTorso = 3,
    playerVariationLegs = 4,
    playerVariationHands = 5,
    playerVariationFeet = 6,
    playerVariationEyes = 7,
    playerVariationAccessories = 8,
    playerVariationTasks = 9,
    playerVariationTextures = 10,
    playerVariationTorso2 = 11
}

declare enum MpPlayerCombatMovement {
    stationary = 0,
    defensive = 1,
    offensive = 2,
    suicidalOffensive = 3
}

declare enum MpPlayerCombatFloat {
    blindFireChance = 0,
    burstDurationInCover = 1,
    timeBetweenBurstsInCover = 3,
    timeBetweenPeeks = 4 ,
    strafeWhenMovingChance = 5,
    walkWhenStrafingChance = 8,
    attackWindowDistanceForCover = 11,
    timeToInvalidateInjuredTarget = 12,
    optimalCoverDistance = 16,
}

declare enum MpPlayerCanBeKnockedOffVehicle {
    can = 0,
    cant =1,
    unk = 2,
    unk2 = 3
}

declare enum MpPlayerStance {
    idle = 0,
    walk = 1,
    run = 2,
}

declare enum MpPlayerPedPropsData {
    playerPropHats = 0,
    playerPropGlasses = 1,
    playerPropEars = 2,
}

declare enum MpPlayerCombatAttributes {
    bfCanUseCover = 0,
    bfCanUseVehicles = 1,
    bfCanDoDrivebys = 2,
    bfCanLeaveVehicle = 3,
    bfCanFightArmedPedsWhenNotArmed = 5,
    bfCanTauntInVehicle = 20,
    bfAlwaysFight = 46,
    bfIgnoreTrafficWhenDriving = 52,
    bfFreezeMovement = 292,
    bfbfPlayerCanUseFireingWeapons = 1424
}

declare enum MpPlayerRagdollTypes {
    normal = 0,
    stiffLegs = 1,
    narrowLegs = 2,
    wideLegs = 3
}

declare enum MpPlayerCombatAbility {
    poor = 0,
    average = 1,
    professional = 2
}

declare enum MpPlayerVehicleEscortModes {
    behind = -1,
    ahead = 0,
    left = 1,
    right = 2,
    backLeft = 3,
    backRight = 4
}

declare enum MpPlayerAimFlag {
    aimAtFocusLocation = 0,
    aimAtGoToLocation = 1
}

declare enum MpPlayerVehicleActions {
    brake = 1,
    brakeAndReverse = 3,
    turnLeftBraking = 4,
    turnRightBraking = 5,
    brakeStrongUntilTimeEnds = 6,
    turnLeftRightAccelerate = 7,
    weakAcceleration = 9,
    turnLeftRestoreWheelPosToCenter = 10,
    turnRightRestoreWheelPosToCenter = 11,
    turnLeftGoReverse = 13,
    turnLeftGoReverse2 = 14,
    crashTheGameAfterTwoSeconds = 16,
    keepActualStateMaybeGameCrash = 17,
    gameCrash = 18,
    strongBrakeTurnLeftRight = 19,
    weakBrakeAndTurnLeftThenTurnRight = 20,
    weakBrakeAndTurnRightThenTurnLeft = 21,
    brakeAndReverse2 = 22,
    accelerateFast = 23,
    brak2e = 24,
    brakeTurningLeftThenWhenAlmostStoppingItTurnsLeftMore = 25,
    brakeTurningR0ightThenWhenAlmostStoppingItTurnsRightMore = 26,
    brakeUntilCarStopOrUntilTimeEnds = 27,
    brakeStrongReverseAcceleration = 28,
    performsBurnout = 30,
    accelerateHandbrake = 31,
    accelerateVeryStrong = 32
}

declare enum MpPlayerEAnimationFlags {
    animFlagsNormal = 0,
    animFlagsRepeat = 1,
    animFlagsStopLastFrame = 2,
    animFlagsUpperbody = 16,
    animFlagsEnablePlayerControl = 32,
    animFlagsCancelable = 120,
}

declare enum MpPlayerDrivingStyles {
    rushed = 0,
    ignoreTrafficLights = 1,
    fast = 2,
    normal = 3,
    fastAvoidTraffic = 4,
    fastStopsInTrafficButOvertakesSometimes = 5,
    fastAvoidsTrafficExtremely = 6
}
