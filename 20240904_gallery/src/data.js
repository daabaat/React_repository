const galleryItems = [
  {
    id: 1,
    title: "산에서의 일몰",
    description: "산맥 위로 펼쳐지는 아름다운 일몰.",
    imageUrl:
      "https://images.unsplash.com/photo-1725064646779-73d9f86168f1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dateTaken: "2023-08-01",
    location: "록키 산맥, 미국",
    tags: ["일몰", "산", "자연"],
  },
  {
    id: 2,
    title: "밤의 도시 풍경",
    description: "밤이 되면 빛으로 가득 찬 도시.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681552900042-5b5881fed356?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dateTaken: "2023-06-15",
    location: "뉴욕, 미국",
    tags: ["도시 풍경", "밤", "도시"],
  },
  {
    id: 3,
    title: "고요한 해변",
    description: "잔잔한 파도가 해변에 부드럽게 밀려오는 모습.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dateTaken: "2023-07-10",
    location: "몰디브",
    tags: ["해변", "바다", "휴식"],
  },
  {
    id: 4,
    title: "숲길",
    description: "울창한 숲 속의 평화로운 산책로.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1665311552973-53cdaeaa52c3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dateTaken: "2023-09-05",
    location: "검은 숲, 독일",
    tags: ["숲", "산책로", "하이킹"],
  },
  {
    id: 5,
    title: "오로라",
    description: "하늘에서 춤추는 북극광.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1675756583711-ce312872227b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dateTaken: "2023-01-20",
    location: "트롬쇠, 노르웨이",
    tags: ["오로라", "북극광", "자연"],
  },
  {
    id: 6,
    title: "사막의 모래언덕",
    description: "맑은 하늘 아래 황금빛 모래 언덕.",
    imageUrl:
      "https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dateTaken: "2023-03-18",
    location: "사하라 사막, 아프리카",
    tags: ["사막", "모래언덕", "모래"],
  },
  {
    id: 7,
    title: "열대 폭포",
    description: "맑은 물이 흐르는 폭포.",
    imageUrl:
      "https://images.unsplash.com/photo-1522645951282-750282e3b142?q=80&w=2153&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dateTaken: "2023-05-22",
    location: "발리, 인도네시아",
    tags: ["폭포", "열대", "자연"],
  },
  {
    id: 8,
    title: "가을 숲",
    description: "완전한 가을 색으로 물든 나무들과 땅에 떨어진 잎들.",
    imageUrl:
      "https://images.unsplash.com/photo-1700656106838-5a7d917d2678?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dateTaken: "2023-10-11",
    location: "버몬트, 미국",
    tags: ["가을", "숲", "단풍"],
  },
  {
    id: 9,
    title: "눈 덮인 산봉우리",
    description: "맑은 하늘 아래 눈 덮인 산봉우리.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1672855379473-14a63d6ada68?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dateTaken: "2023-12-01",
    location: "알프스, 스위스",
    tags: ["눈", "산", "겨울"],
  },
  {
    id: 10,
    title: "푸르른 계곡",
    description: "높은 절벽으로 둘러싸인 푸르른 계곡.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661956197580-008967ad1500?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dateTaken: "2023-04-08",
    location: "요세미티, 미국",
    tags: ["계곡", "초록", "자연"],
  },
];

export default galleryItems;
