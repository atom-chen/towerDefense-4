// 代码生成,请不要手动修改
export class LevelCfg {

	public readonly id: number;     // Id
	public readonly coefficient: number;     // 难度系数,/100
	public readonly monsterTeam: number;     // 怪物组
	public readonly score: number;     // 关卡总分
	public readonly map: string;     // 场景

	constructor(param: string) {
		let data: Array<string> = param.split("\t");
		let index: number = 0;
		this.id = Number(data[index++]);
		this.coefficient = Number(data[index++]);
		this.monsterTeam = Number(data[index++]);
		this.score = Number(data[index++]);
		this.map = data[index++];
		return;
	}
}