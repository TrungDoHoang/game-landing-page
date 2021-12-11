import {
    cardAhri,
    cardAshe,
    cardGaren,
    cardFortune,
    cardAkali,
    cardLux,
    bgGaren,
    bgLux,
    bgFortune,
    bgAshe,
    bgAhri,
    bgAkali,
    bgLargeAshe,
    bgLargeAhri,
    bgLargeFortune,
    bgLargeLux,
    bgLargeGaren,
    bgLargeAkali
} from './images'

export const championsData = [
    {
        img: cardAkali,
        name: 'akali',
        bg: bgAkali,
        nickName: 'Sát Thủ Đơn Độc',
        role: 'SÁT THỦ',
        difficulty: 'Trung Bình',
        description: `Rời khỏi Hội Kinkou, từ bỏ danh hiệu Nắm Đấm Bóng Đêm, Akali giờ hành động một mình, sẵn sàng trở thành thứ vũ khí giết chóc mà người dân cần. Dù vẫn khắc ghi những gì học được từ Shen, cô đã thế sẽ tiêu diệt kẻ thù của Ionia, từng mạng từng mạng một. Akali có thể ra tay trong yên lặng, nhưng thông điệp của cô thật rõ ràng: hãy khiếp sợ một sát thủ không có chủ nhân.`,
        video: 'sQ7ALTSCbdw',
        bgLarge: bgLargeAkali
    },
    {
        img: cardFortune,
        name: 'miss fortune',
        bg: bgFortune,
        nickName: 'Thợ Săn Tiền Thưởng',
        role: 'XẠ THỦ',
        difficulty: 'Dễ',
        description: 'Một thuyền trưởng Bilgewater nổi tiếng về nhan sắc nhưng cũng đáng sợ về mặt tàn nhẫn, Sarah Fortune bật hẳn lên giữa đám tội phạm khét tiếng của thành phố cảng. Khi còn nhỏ, cô đã chứng kiến vua hải tặc Gangplank sát hại gia đình mình—và đã trả thù một cách tàn bạo sau đó khi thổi tung kỳ hạm của hắn khi hắn vẫn còn trên boong. Những ai đánh giá thấp cô sẽ phải đối mặt với một đối thủ mưu mẹo và khó đoán... và nhiều khả năng là một hai viên đạn vào bụng.',
        video: 'TN-EdiIg4G4',
        bgLarge: bgLargeFortune
    },
    {
        img: cardAshe,
        name: 'ashe',
        bg: bgAshe,
        nickName: 'Cung Băng',
        role: 'XẠ THỦ',
        difficulty: 'Trung Bình',
        description: `Là chiến mẫu của tộc Hậu Nhân Avarosa, Ashe chỉ huy đội quân đông đảo nhất phương Bắc. Khắc kỷ, thông minh, và đầy lý tưởng, nhưng không thoải mái với vai trò thủ lĩnh cho lắm, cô dùng phép thuật trong dòng dõi của mình để làm chủ cây cung bằng Chân Băng. Với niềm tin từ người dân rằng cô là tái sinh của nữ anh hùng trong thần thoại Avarosa, Ashe hy vọng thống nhất được Freljord bằng cách lấy lại đất đai của tổ tiên.`,
        video: 'mSbMQ5xDnEg',
        bgLarge: bgLargeAshe
    },
    {
        img: cardGaren,
        name: 'garen',
        bg: bgGaren,
        nickName: 'Sức Mạnh Của Demacia',
        role: 'ĐẤU SĨ',
        difficulty: 'Trung Bình',
        description: `Chiến binh cao quý và đầy tự hào Garen chiến đấu trong hàng ngũ Đội Tiên Phong Bất Khuất. Anh được đồng đội yêu mến, và được cả kẻ địch yêu mến—ít nhất cũng là với tư cách dòng dõi Crownguard, nhưng người được giao phó bảo vệ Demacia và lý tưởng của nó. Khoác trên mình bộ giáp kháng ma thuật và cầm trên tay thanh trọng kiếm, Garen đứng hiên ngang đối đầu với lũ pháp sư và phù thủy trên chiến trường, cùng với một cơn lốc sắt thép.`,
        video: 'Q7oyW6LjxrA',
        bgLarge: bgLargeGaren
    },
    {
        img: cardAhri,
        name: 'ahri',
        bg: bgAhri,
        nickName: 'Hồ Ly Chín Đuôi',
        role: 'PHÁP SƯ',
        difficulty: 'Trung Bình',
        description: 'Sinh ra với một liên kết ma thuật tiềm tàng của Runeterra, Ahri là một Vastaya có khả năng chuyển hóa ma thuật thành những quả cầu năng lượng thuần khiết. Cô ta say mê việc chơi đùa với con mồi của mình bằng cách thao túng cảm xúc của họ, rồi sau đó nuốt chửng lấy nguồn tinh hoa sự sống từ nạn nhân. Dù mang bản năng săn mồi tự nhiên, Ahri lại cảm thấy một sự cảm thông khi cô ta nhận được những mảnh ký ức từ mỗi linh hồn mà cô hấp thụ.',
        video: '0z7kfuJwGvs',
        bgLarge: bgLargeAhri
    },
    {
        img: cardLux,
        name: 'Lux',
        bg: bgLux,
        nickName: 'Tiểu Thư Ánh Sáng',
        role: 'PHÁP SƯ',
        difficulty: 'Trung Bình',
        description: `Luxanna Crownguard đến từ Demacia, một quốc gia khép kín nơi ma thuật bị sợ hãi và nghi kỵ. Sở hữu khả năng điều khiển ánh sáng theo ý muốn, cô lớn lên trong nỗi sợ bị phát hiện và trục xuất, và buộc phải giữ bí mật sức mạnh của mình để bảo toàn vị thế của gia tộc. Dù sao đi nữa, tính lạc quan và ngang ngạnh của Lux đã giúp cô đón nhận tài năng ấy, và giờ cô cẩn thận sử dụng nó để phục vụ quê hương.`,
        video: 'khEBkz6A0oQ',
        bgLarge: bgLargeLux
    },
]