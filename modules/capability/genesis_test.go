package capability_test

import (
	"github.com/cosmos/cosmos-sdk/runtime"

	"github.com/cosmos/ibc-go/modules/capability"
	"github.com/cosmos/ibc-go/modules/capability/keeper"
	"github.com/cosmos/ibc-go/modules/capability/types"
)

func (suite *CapabilityTestSuite) TestGenesis() {
	// InitGenesis must be called in order to set the initial index to 1.
	capability.InitGenesis(suite.ctx, *suite.keeper, *types.DefaultGenesis())

	sk1 := suite.keeper.ScopeToModule(bankModuleName)
	sk2 := suite.keeper.ScopeToModule(stakingModuleName)

	cap1, err := sk1.NewCapability(suite.ctx, "transfer")
	suite.Require().NoError(err)
	suite.Require().NotNil(cap1)

	err = sk2.ClaimCapability(suite.ctx, cap1, "transfer")
	suite.Require().NoError(err)

	cap2, err := sk2.NewCapability(suite.ctx, "ica")
	suite.Require().NoError(err)
	suite.Require().NotNil(cap2)

	genState := capability.ExportGenesis(suite.ctx, *suite.keeper)

	newKeeper := keeper.NewKeeper(suite.cdc, runtime.NewKVStoreService(suite.storeKey), runtime.NewMemStoreService(suite.memStoreKey))
	newSk1 := newKeeper.ScopeToModule(bankModuleName)
	newSk2 := newKeeper.ScopeToModule(stakingModuleName)
	deliverCtx := suite.NewTestContext()

	capability.InitGenesis(deliverCtx, *newKeeper, *genState)

	// check that all previous capabilities exist in new app after InitGenesis
	sk1Cap1, ok := newSk1.GetCapability(deliverCtx, "transfer")
	suite.Require().True(ok, "could not get first capability after genesis on first ScopedKeeper")
	suite.Require().Equal(*cap1, *sk1Cap1, "capability values not equal on first ScopedKeeper")

	sk2Cap1, ok := newSk2.GetCapability(deliverCtx, "transfer")
	suite.Require().True(ok, "could not get first capability after genesis on first ScopedKeeper")
	suite.Require().Equal(*cap1, *sk2Cap1, "capability values not equal on first ScopedKeeper")

	sk2Cap2, ok := newSk2.GetCapability(deliverCtx, "ica")
	suite.Require().True(ok, "could not get second capability after genesis on second ScopedKeeper")
	suite.Require().Equal(*cap2, *sk2Cap2, "capability values not equal on second ScopedKeeper")
}
