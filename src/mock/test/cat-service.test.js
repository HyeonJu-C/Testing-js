const CatService = require('../cat-service') // error occured when i hoisted this code to 1st line => https://jestjs.io/docs/mock-functions#mock-implementations
const Cat = require('../cat')
jest.mock('../cat') // 지금 불러온 모듈은 가짜 객체(mock)임을 명시

// 언제 mock을 사용할까?
// => CatService 모듈을 테스트하고 싶은데, CatSercive가 다른 모듈 Cat에 의존하고 있음
// => 이럴 때 Cat을 mocking 해서 실제 Cat이 어떻게 동작하는지와는 상관 없이, 필요한 단위 기능만을 테스트할 수 있음
// ex) 아래와 같이 getFilterdCat 서비스의 기능 만을 테스트 할 수 있음

describe('cat service', () => {
  let catService

  beforeEach(() => {
    catService = new CatService()
  })

  // mockGetAllBreeds와 Cat.mockImplementation은 describe 내부에 작성
  // global scope에 작성할 이유가 없음 => describe 안에서만 사용되는 변수이기 때문

  const mockGetAllBreeds = () =>
    Promise.resolve({
      data: [{ breed: 'Abyssinian' }, { breed: 'Chartreux' }],
    })
  Cat.mockImplementation(() => ({ getAllBreeds: mockGetAllBreeds })) // mock 객체의 값을 원하는 값으로 전달

  it('should filter cats data started with "A"', async () => {
    const filteredCat = await catService.getFilteredCat('A')

    expect(filteredCat).toContainEqual({ breed: 'Abyssinian' })
    expect(filteredCat).not.toContainEqual({ breed: 'Chartreux' })
  })
})
