class CatService {
  // 1. Cat을 직접 주입하는 것이 아니라 CatService를 호출할 때 외부에서 받아온다
  // => 테스트 코드를 작성할 때, 해당 dependency를 stub-class로 쉽게 전달할 수 있다

  // 2. mock vs. stub
  // => mock과 stub 모두 실제 서비스가 아닌, 실제 서비스를 흉내내는 가짜임
  // => mock은 일부 기능 만을, stub은 실제 interface를 모두 흉내낸다는 차이가 있음
  constructor(cat) {
    this.cat = cat
  }

  async getFilteredCat(character) {
    const allBreeds = await this.cat.getAllBreeds()
    return allBreeds?.data?.filter((breed) => breed.breed.startsWith(character))
  }
}

module.exports = CatService
