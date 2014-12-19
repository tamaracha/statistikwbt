describe("ui",function(){
	beforeEach(function(){
		angular.module("ui.router",[]);
		module("ui.router");
		module("ui");
	});
	describe("unitStatusFilter",function(){
		var unitStatusFilter,user,units;
		beforeEach(inject(["unitStatusFilter",function(_unitStatusFilter_){
			unitStatusFilter=_unitStatusFilter_;
		}]));
		beforeEach(function(){
			units=[{
				_id: "a"
			},{
				_id: "b",
				requires: ["a"]
			},{
				_id: "c",
				requires: ["a","b"]
			}];
		});
		it("should be undefined when no options",function(){
			expect(unitStatusFilter()).to.be.undefined();
		});
		it("should return 'ready' when only _id is passed",function(){
			expect(unitStatusFilter("a")).to.equal("ready");
		});
		it("should return 'done' when id is in user.done",function(){
			var user={done: ["a"]};
			expect(unitStatusFilter("a",user)).to.equal("done");
			expect(unitStatusFilter("b",user)).to.equal("ready");
		});
		it("should be undefined when unit not found",function(){
			expect(unitStatusFilter("d",{},units)).to.be.undefined();
		});
		it("should return 'ready' when unit has no deps",function(){
			expect(unitStatusFilter("a",{},units)).to.equal("ready");
		});
		it("should return 'unready' when unfulfilled deps",function(){
			var user={done: ["a"]};
			expect(unitStatusFilter("b",{},units)).to.equal("unready");
			expect(unitStatusFilter("b",user,units)).to.equal("ready");
			expect(unitStatusFilter("c",user,units)).to.equal("unready");
		});
	});
});