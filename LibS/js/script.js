
const text_m = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque mollitia corporis nobis ea officia veniam amet voluptates nostrum exercitationem, reprehenderit aperiam saepe numquam ab, corrupti tempora? Sapiente sed praesentium fugiat!
`
const image_m = `
./assets/logo2023.png
`
const text_image_m = `
https://sun9-79.userapi.com/impg/78ohRkfTW7Lz0gfKr8xYpJRzWwiwXsBN4OfGlg/47UxErQfSKk.jpg?size=1000x1000&quality=96&sign=5c6e9f3060586acfff2714c60725aa83&c_uniq_tag=mVO5KUSNaJiW5R3R2NsRHPj3Gi5l7v4uXozzsCaZZdc&type=album

`
const icon_image_m = `
https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Coat_of_Arms_of_Navapo%C5%82ack%2C_Belarus.svg/1200px-Coat_of_Arms_of_Navapo%C5%82ack%2C_Belarus.svg.png
`
const noise = `
url('data:image/png;base64,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')
`

const text_secondary = ' text-secondary'
const d_block = ' inline-block'
const col_size = ' col-sm'
const empty_style = ''
const link_badge = ' badge badge-dark w-100'
const link_nav = ' nav-item nav-link border-light border-right'



/*------------------------*/ 
/*-                      -*/ 
/*-     JSON данные      -*/ 
/*-                      -*/
/*------------------------*/


NewsJSONobj = {
  'new1': {
    'id': 'new1',
    'name': 'Новость 1',
    'content': 'В Год мира и созидания в Новополоцке ко Дню Победы централизованная библиотечная система (далее ЦБС) города проводит 2-й открытый городской конкурс чтецов поэзии «Войны победная строка» (см. Положение). Организаторами конкурса, кроме ЦБС, являются Новополоцкий городской исполнительный комитет, Новополоцкая организация республиканского объединения «Белая Русь».',
    'date': '20.20.2000',
    'image': 'https://168856.lp.tobiz.net/img/700x500/5ef422a1bb831fffe2b7a3f39d4b87b3.jpg'
  }, 
  'new2': {
    'id': 'new2',
    'name': 'Новость 2',
    'content': '21 апреля в детской библиотеке им.С.Маршака прошла литературная игра-викторина «Сказки дедушки Корнея». Гостями мероприятия стали учащиеся 1«В» класса СШ №4, которые совершили путешествие в волшебную сказочную страну, где живут добрые сказки Корнея Ивановича Чуковского. Ребята познакомились с биографией писателя, узнали много интересных эпизодов из его жизни, о том, как были написаны некоторые из его сказок.',
    'date': '20.20.2000',
    'image': text_image_m
  },
  'new3': {
    'id': 'new3',
    'name': 'Новость 3',
    'content': '20 апреля в клубе ”Оранжевое настроение“ библиотеки им.К.Симонова состоялся час здоровья, который был посвящен привычкам, как вредным, так и полезным. Заседание клуба прошло азартно и весело. Молодые люди выполняли творческие задания (нарисуй ”Портрет никотина“, ”Плохой, хороший аппетит“, ”Твоя витаминная азбука”).',
    'date': '20.20.2000',
    'image': text_image_m
  },
  'new4': {
    'id': 'new4',
    'name': 'Новость 4',
    'content': 'Центральная библиотека им.В.Маяковского удивляет читателей и посетителей уникальностью художественного оформления своих залов. Стены читальных залов библиотеки оформлены фризом «История и преемственность культур», созданным новополоцкими художниками В.Шаппо и В.Гавазюком. Фриз, как элемент интерьера залов библиотеки, привлекает внимание будущих специалистов по дизайну, студентов Полоцкого государственного университета (ПГУ).',
    'date': '20.20.2000',
    'image': text_image_m
  },
  'new5': {
    'id': 'new5',
    'name': 'Новость 5',
    'content': 'Паэтка, член Саюза пісьменнікаў Беларусі, удзельнік народнага калектыву “Крылы” дзяржаўнай установы культуры “Цэнтралізаваная бібліятэчная сістэма горада Наваполацка” Іна Васільеўна Саламаха, якая добра вядома ў літаратурных колах пад псеўданімам – Іна Мароз, стала лаўрэатам 3-й ступені Міжнароднага літаратурнага конкурсу “Славянскі калейдаскоп” у намінацыі “Паэзія”.',
    'date': '20.20.2000',
    'image': text_image_m
  },
  'new6': {
    'id': 'new6',
    'name': 'Новость 6',
    'content': 'Вот уже двадцать один год, находясь в стремительном и дерзновенном полёте мыслей, образов, вдохновения, осуществляет свою деятельность литературно-музыкальное объединение «Крылья» централизованной библиотечной системы города Новополоцка под чутким и бессменным руководством Галины Сташкевич. 16 апреля 2002 года было создано объединение, а в 2005 году уже удостоено звания «народный коллектив».',
    'date': '20.20.2000',
    'image': text_image_m
  },
  'new7': {
    'id': 'new7',
    'name': 'Новость 7',
    'content': '19 апреля в детской библиотеке им. С.Маршака прошла познавательная игра «Азбука безопасности», в которой поучаствовали воспитанники старших групп детского сада №30. Ребята узнали о том, что огонь может быть одновременно другом и врагом, познакомились с историей возникновения и становления пожарной службы.',
    'date': '20.20.2000',
    'image': text_image_m
  },
}

GaleryJSONobj = {
  'classes': 'align-self-center rounded pb-3 pict_react',
  'width': 'width: 15em',
  'pict1': {
    'id': 'img1',
    'imagelink': 'http://novopolotsk-lib.by/images/stories/2023/20230512-kryliya//5.jpg',
  },
  'pict2': {
    'id': 'img2',
    'imagelink': 'http://novopolotsk-lib.by/images/stories/2023/20230512-mai//IMG_20230512_101602.jpg',
  },
  'pict3': {
    'id': 'img3',
    'imagelink': 'http://novopolotsk-lib.by/images/stories/2023/20230511-yamar//Sc3i1uO5KWg.jpg',
  },
  'pict4': {
    'id': 'img4',
    'imagelink': 'http://novopolotsk-lib.by/images/stories/2023/20230511-yamar//XaMN9V001fE.jpg',
  },
  'pict5': {
    'id': 'img5',
    'imagelink': 'http://novopolotsk-lib.by/images/stories/2023/20230511-yamar//jYolA8W5FIo.jpg',
  },
  'pict6': {
    'id': 'img6',
    'imagelink': 'http://novopolotsk-lib.by/images/stories/2023/20230511-yamar//GhAgQvhGzGw.jpg',
  },
  'pict7': {
    'id': 'img7',
    'imagelink': 'http://novopolotsk-lib.by/images/stories/2023/20230511-today//1.jpg',
  },
  'pict8': {
    'id': 'img8',
    'imagelink': 'http://novopolotsk-lib.by/images/stories/2023/20230515-grani//1683808636182.jpg',
  }
}

BooksJSONobj = {
  'classes': 'align-self-center rounded pb-3 pict_react',
  'width': 'width: 15em',
  'book1': {
    'id': 'book1',
    'booklink': 'https://168856.lp.tobiz.net/img/880x1180/65a8a3804729ec01a90ee0181901de5d.jpg',
  },
  'book2': {
    'id': 'book2',
    'booklink': 'https://168856.lp.tobiz.net/img/880x1180/93211a8a9861ed3d308daf5baa74c7f0.jpg',
  },
  'book3': {
    'id': 'book3',
    'booklink': 'https://168856.lp.tobiz.net/img/880x1180/5e7bed74d14f56bb5a48681454046e33.jpg',
  },
  'book4': {
    'id': 'book4',
    'booklink': 'https://168856.lp.tobiz.net/img/880x1180/bcdafc4d4f70a7afeb8f99bc48f159be.jpg',
  },
  'book5': {
    'id': 'book5',
    'booklink': 'https://168856.lp.tobiz.net/img/880x1180/bd093feb31632e7016b0a3260e9bdc38.jpg',
  },
  'book6': {
    'id': 'book6',
    'booklink': 'https://168856.lp.tobiz.net/img/880x1180/73d23d24cfcd5fcd4a1f6cca051ab46c.jpg',
  },
  'book7': {
    'id': 'book7',
    'booklink': 'https://168856.lp.tobiz.net/img/880x1180/27dd7bf32342602a2d9cffd96f3172c9.jpg',
  },
  'book8': {
    'id': 'book8',
    'booklink': 'https://168856.lp.tobiz.net/img/880x1180/9f3e7386512803d2728c24f0ee3e7e1b.jpg',
  },
}


/*------------------------*/


class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }
  render(model) {
    this.$el.innerHTML = ''
    model.forEach(block => {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML())
    })
  }
}


/*------------------------*/ 
/*- Классы коомпонентов  -*/ 
/*- контента             -*/
/*------------------------*/


class Block {
  constructor(type, value, options) {
    this.type = type
    this.value = value
    this.options = options
  }
  toHTML() {
    throw new Error('toHTML должен быть реализован')
  }
}

class TitleBlock extends Block {
  constructor(value, options) {
    super('title', value, options)
  }
  toHTML() {
    const {id = '', tag = 'h1', styles} = this.options
    return row(col(`<${tag} id="${id}">${this.value}</${tag}>`), css(styles))
  }
}
class ColumnBlock extends Block {
  constructor(value, options) {
    super('columns', value, options)
  }
  toHTML() {
    const html = this.value.map(col)
    return row(html.join(''), css(this.options.styles))
  }
}

class SliderBlock extends Block {
  constructor(value, options) {
    super('slider', value, options)
  }
  toHTML() {
    const styles = this.options
    return row(sliderbar(), css(styles))
  }
}

class SomeContentBlock extends Block {
  constructor(value, options) {
    super('somecontent', value, options)
  }
  toHTML() {
    const styles = this.options
    return row(contentbook(), css(styles))
  }
}

class ImageBlock extends Block {
  constructor(value, options) {
    super('image', value, options)
  }
  toHTML() {
    const {imageStyles: _is, alt = '', styles} = this.options
    // return row(`<img src="${this.value}" alt="${alt}" style="${css(_is)}"/>`, css(styles))
    return `<div class = "container"><div class = "row"><img src="${this.value}" alt="${alt}" style="${css(_is)}"/></div></div>`
  }
}
class TextBlock extends Block {
  constructor(value, options) {
    super('text', value, options)
  }
  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}
class NavigationBlock extends Block {
  constructor(value, options) {
    super('navigation', value, options)
  }
  toHTML() {
    const html = this.value.map(navitem)
    return navbar(html.join(''), icon_image_m, css(this.options.styles))
  }
}
class IMGColBlock extends Block {
  constructor(value, options) {
    super('imgcols', value, options)
  }
  toHTML() {
    const html = this.value.map(mediaItem)
    return MediaUlList(html.join(''), css(this.options.styles))
  }
}

class MainFooter extends Block {
  constructor(value, options) {
    super('mainfoot', value, options)
  }
  toHTML() {
    const html = this.value.map(col)
    //return FooterInit(row(html.join(''), css(this.options.styles)))
    return testFooter()
  }
}


/*------------------------*/ 
/*-       Модель         -*/ 
/*------------------------*/


const model = [

  // new ImageBlock(image_m, {
  //   styles: {
  //     //border: '10px solid red',
  //     display: 'flex',
  //     'justify-content': 'center'
  //   },
  //   imageStyles: {
  //     width: '100%'
  //   },
  //   alt: ''
  // }
  // ),



  new NavigationBlock([
    alink('#popular','Популярное',link_nav),
    alink('#books','Книги',link_nav),
    alink('#authors','Авторы',link_nav),
    alink('#galery ','Галерея',link_nav),
    alink('#publishing ','Издательства',link_nav),
    alink('#about','О библиотеке',link_nav),
    alink('#services','Услуги',link_nav),
    alink('#news','Новости',link_nav),
    alink('#contacts','Контакты',link_nav),
    alink('http://86.57.171.98:8080/alis/StartEK/index.php','Электронный каталог',link_nav),
  ], {
      styles: {
      }
    }
  ),

  new SliderBlock( 
    {
      styles: {

        }
    }
  ),

  
  new TitleBlock('Откройте для себя новую книгу', {
      id: 'books',
      tag: 'h1',
      styles: {
        padding: '5% 20% 1% 20%',
        'text-align': 'center',
      }
    }
  ),
  new ColumnBlock([ 
    imageitem(BooksJSONobj.book1['id'], BooksJSONobj.book1['booklink'], BooksJSONobj.classes, BooksJSONobj.width),
    imageitem(BooksJSONobj.book2['id'], BooksJSONobj.book2['booklink'], BooksJSONobj.classes, BooksJSONobj.width),
    imageitem(BooksJSONobj.book3['id'], BooksJSONobj.book3['booklink'], BooksJSONobj.classes, BooksJSONobj.width),
    imageitem(BooksJSONobj.book4['id'], BooksJSONobj.book4['booklink'], BooksJSONobj.classes, BooksJSONobj.width),
    imageitem(BooksJSONobj.book5['id'], BooksJSONobj.book5['booklink'], BooksJSONobj.classes, BooksJSONobj.width),
    imageitem(BooksJSONobj.book6['id'], BooksJSONobj.book6['booklink'], BooksJSONobj.classes, BooksJSONobj.width),
    imageitem(BooksJSONobj.book7['id'], BooksJSONobj.book7['booklink'], BooksJSONobj.classes, BooksJSONobj.width),
    imageitem(BooksJSONobj.book8['id'], BooksJSONobj.book8['booklink'], BooksJSONobj.classes, BooksJSONobj.width),
  ], {
      styles: {
        padding: '2% 20% 2% 20%',
        'font-weight': 'bold',
        'justify-content': 'center',
        // 'border-block-end': '1px solid #ddd',
      }
    }
  ), 


  new TitleBlock('Самые популярные книги в этом месяце', {
    id: 'popular',
    tag: 'h1',
      styles: {
        'padding-top': '3em',
        'text-align': 'center',
        'background-color': 'rgb(94, 159, 255)',
        'color': '#fff'
      }
    }
  ),
  new TextBlock('Расскажем вам о том, какие книги пользуются популярностью среди читателей', {
      styles: {
        'text-align': 'center',
        'padding-bottom': '1em',
        'background-color': 'rgb(94, 159, 255)',
        'font-size': '1em',
        'color': '#fff'
      }
    }
  ),
  new SomeContentBlock( 
    {
      styles: {

        }
    }
  ),

  new TitleBlock('Самые популярные авторы', {
    id: 'authors',
    tag: 'h1',
      styles: {
        'padding-top': '3em',
        'padding-bottom': '1em',
        'text-align': 'center'
      }
    }
  ),
  new ColumnBlock([
    row(imageitem('', 'https://168856.lp.tobiz.net/img/240x240/f9f419770611675183017e4aadd38279.jpg', 'align-self-center rounded-circle pict_react', 'width: 15em'),'justify-content: center') + row('Стивен Кинг','justify-content: center'),
    row(imageitem('', 'https://1.bp.blogspot.com/-K2s_OpOI8b0/XxDxjnC5_eI/AAAAAAAAThI/vTEg_6Ypqr8vwMqn1CHOX4wF_48ueQr4gCLcBGAsYHQ/s1600/%25D0%25A8%25D0%25BE%25D0%25BB%25D0%25BE%25D1%2585%25D0%25BE%25D0%25B21.jpg', 'align-self-center rounded-circle pict_react', 'width: 15em'),'justify-content: center') + row('Михаил Шолохов','justify-content: center'),
    row(imageitem('', 'https://168856.lp.tobiz.net/img/240x240/b9b33de3baa6cae2d8104bf508d2d4a2.jpg', 'align-self-center rounded-circle pict_react', 'width: 15em'),'justify-content: center') + row('Брайан Джейкс','justify-content: center')
  ], {
      styles: {
        color: '#000',
        'text-align':'center',
        'font-weight': 'bold',
        'padding-bottom': '2em',
      }
    }
  ),


  new TitleBlock('Наша галерея', {
    id: 'galery',
    tag: 'h1',
      styles: {
        'margin-top': '5em',
        'padding-bottom': '1em',
        'text-align': 'center'
      }
    }
  ),
  new ColumnBlock([ 
    imageitem(GaleryJSONobj.pict1['id'], GaleryJSONobj.pict1['imagelink'], GaleryJSONobj.classes, GaleryJSONobj.width),
    imageitem(GaleryJSONobj.pict2['id'], GaleryJSONobj.pict2['imagelink'], GaleryJSONobj.classes, GaleryJSONobj.width),
    imageitem(GaleryJSONobj.pict3['id'], GaleryJSONobj.pict3['imagelink'], GaleryJSONobj.classes, GaleryJSONobj.width),
    imageitem(GaleryJSONobj.pict4['id'], GaleryJSONobj.pict4['imagelink'], GaleryJSONobj.classes, GaleryJSONobj.width),
    imageitem(GaleryJSONobj.pict5['id'], GaleryJSONobj.pict5['imagelink'], GaleryJSONobj.classes, GaleryJSONobj.width),
    imageitem(GaleryJSONobj.pict6['id'], GaleryJSONobj.pict6['imagelink'], GaleryJSONobj.classes, GaleryJSONobj.width),
    imageitem(GaleryJSONobj.pict7['id'], GaleryJSONobj.pict7['imagelink'], GaleryJSONobj.classes, GaleryJSONobj.width),
    imageitem(GaleryJSONobj.pict8['id'], GaleryJSONobj.pict8['imagelink'], GaleryJSONobj.classes, GaleryJSONobj.width),
  ], {
      styles: {
        padding: '2% 20% 2% 20%',
        'font-weight': 'bold',
        'justify-content': 'center',
        // 'border-block-end': '1px solid #ddd',
      }
    }
  ), 


  new TitleBlock('Редакции и издательства', {
    id: 'publishing',
    tag: 'h1',
      styles: {
        'padding-top': '3em',
        'text-align': 'center',
        'background-color': 'rgb(94, 159, 255)',
        'color': '#fff'
      }
    }
  ),
  new ColumnBlock([ 
    alink('#', imageitem('','https://www.belarusinfo.by/ru/images/stories/logo/97601.gif', 'align-self-center rounded pb-3', 'width: 15em')),
    alink('#', imageitem('','https://www.belarusinfo.by/ru/images/stories/logo/98421.gif', 'align-self-center rounded pb-3', 'width: 15em')),
    alink('#', imageitem('','https://www.belarusinfo.by/ru/images/stories/logo/9001.gif',  'align-self-center rounded pb-3', 'width: 15em')),
    alink('#', imageitem('','https://www.belarusinfo.by/ru/images/stories/logo/50389.gif', 'align-self-center rounded pb-3', 'width: 15em')),
    alink('#', imageitem('','https://www.belarusinfo.by/ru/images/stories/logo/22076.gif', 'align-self-center rounded pb-3', 'width: 15em')),
    alink('#', imageitem('','https://www.belarusinfo.by/ru/images/stories/logo/86005.gif', 'align-self-center rounded pb-3', 'width: 15em')),
    alink('#', imageitem('','https://www.belarusinfo.by/ru/images/stories/logo/90599.gif', 'align-self-center rounded pb-3', 'width: 15em')),
    alink('#', imageitem('','https://www.belarusinfo.by/ru/images/stories/logo/75856.gif', 'align-self-center rounded pb-3', 'width: 15em'))
  ], {
      styles: {
        padding: '2% 20% 2% 20%',
        'font-weight': 'bold',
        'justify-content': 'center',
        'background-color': 'rgb(94, 159, 255)',
      }
    }
  ), 



  new TitleBlock('Приходите к нам в библиотеку', {
    id: 'about',
    tag: 'h1',
      styles: {
        'padding-top': '3em',
        'padding-bottom': '1em',
        'text-align': 'center'
      }
    }
  ),
  new TextBlock('В нашей библиотеке сделано все для комфорта читателей', {
      styles: {
        'text-align': 'center',
        'padding-bottom': '1em',
        'font-size': '1em',
      }
    }
  ),

  new ImageBlock('https://168856.lp.tobiz.net/img/900x700/7e6d5274d59bb3a7283d82e61a5cddfa.jpg', {
    styles: {
      //border: '10px solid red',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '100%',
      'object-fit': 'cover',
      height: '30em',
    },
    alt: ''
  }
  ),
  
  new TextBlock(
    `<div class = "container"><p>Наша миссия - воспитывать всеобщую страсть к чтению, сотрудничая с авторами, чтобы помогать создавать истории и передавать идеи, которые информируют, развлекают и вдохновляют, а также соединяют их с читателями повсюду. Мы являемся международным домом для почти 400 независимых редакционных и творческих изданий.</p>

  <p>Используя наш глобальный охват, внедряя новые технологии и сотрудничая с авторами на всех этапах процесса публикации, от дизайна и редактирования до продаж и маркетинга, производства и распространения, мы хотим предоставить им максимально возможную платформу.</p>
  
  <p>В то же время мы яростно защищаем интеллектуальную собственность наших авторов и выступаем за свободу выражения мнений, гарантируя, что их голоса будут слышны за пределами страницы в обществах и сообществах по всему миру.​​​​​​​ Наша профессиональная команда профессионалов в области публикаций стремится помочь авторам реализовывать свои лучшие работы и находить новые инновационные способы донести истории и идеи до мировой аудитории.</p></div>`
    , {
      styles: {
        'text-align': 'left',
        'padding-bottom': '1em',
        'font-size': '1em',
      }
    }
  ),
  new TextBlock('<div class = "container">Государственное учреждение культуры «Централизованная библиотечная система г.Новополоцка» (далее ЦБС) включает семь библиотек, из них две детские и три семейного типа.</div>', {
    styles: {
      background: 'linear-gradient(to left, #e3f2fd, #ccc)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }
  ),



  new TitleBlock('Вы можете воспользоваться услугами', {
    id: 'services',
    tag: 'h1',
      styles: {
        'padding-top': '3em',
        'text-align': 'center',
        'background-color': 'rgb(94, 159, 255)',
        'color': '#fff'
      }
    }
  ),
  new TextBlock('Выберите услугу, которая подходит под решение ваших задач', {
      styles: {
        'text-align': 'center',
        'padding-bottom': '1em',
        'background-color': 'rgb(94, 159, 255)',
        'font-size': '1em',
        'color': '#fff'
      }
    }
  ),
  new ColumnBlock([
    row(imageitem('','https://cdn-icons-png.flaticon.com/512/4484/4484530.png ', 'align-self-center pict_react corner-fill', 'width: 10em'),'justify-content: center') + row(`
    <div class = "container"><h3>Распечатка документов</h3>
    <h6>- на принтере или запись информации</h6>
    <h6>- распечатка текста (ч/б или цветная)</h6>
    <h6>- распечатка изображения</h6>
    <h6>- запись информации на носитель </h6></div>`,'justify-content: center;') ,
    row(imageitem('','https://cdn-icons-png.flaticon.com/512/4484/4484744.png ', 'align-self-center pict_react', 'width: 10em'),'justify-content: center') + row(`
    <div class = "container"><h3>Сервисные услуги </h3>
    <h6>- предоставление машинного времени для самостоятельной работы</h6>
    <h6>- услуги электронной почты</h6>
    <h6>- пересылка информации </h6></div>`,'justify-content: center;') ,
    row(imageitem('','https://cdn-icons-png.flaticon.com/512/4484/4484753.png ', 'align-self-center pict_react', 'width: 10em'),'justify-content: center') + row(`
    <div class = "container"><h3>Услуги  МБА</h3>
    <h6>- доставка документов в оригиналах и копиях по запросам пользователей из фондов других библиотек</h6>
    <h6>- электронная доставка документов</h6></div>`,'justify-content: center;') ,
  ], {
      styles: {
        'text-align':'center',
        'padding-bottom': '2em',
        'background-color': 'rgb(94, 159, 255)',
        'color': '#fff'
      }
    }
  ),
  
  new TextBlock(alink('#', 'Подробнее', 'px-2 border-right border-white text-white', ''), {
      styles: {
        'text-align': 'center',
        'padding-bottom': '1em',
        'background-color': 'rgb(94, 159, 255)',
        'font-size': '2em',
        'color': '#fff'
      }
    }
  ),




  new TitleBlock('Полезные ссылки', {
    tag: 'h1',
      styles: {
        'padding-top': '5em',
        'padding-bottom': '1em',
        'text-align': 'center',
        'background-color': 'rgb(94, 159, 255)',
        'color': '#fff'
      }
    }
  ),
  new ColumnBlock([
    alink('#', 'Год мира и созидания', 'px-2 border-right border-white text-white', ''),
    alink('#', 'Время.События.Люди', 'px-2 border-right border-white text-white', ''),
    alink('#', 'Центр правовой информации', 'px-2 border-right border-white text-white', ''),
    alink('#', 'Новополоцк молодежная столица 2023', 'px-2 border-right border-white text-white', '')
  ], {
      styles: {
        padding: '2% 20% 5% 20%',
        'background-color': 'rgb(94, 159, 255)',
        'text-color': '#fff',
        'font-size': '20px',
      }
    }
  ), 


  new TitleBlock('Новости в нашем блоге', {
    tag: 'h1',
      styles: {
        'padding-top': '3em',
        'padding-bottom': '1em',
        'text-align': 'center'
      }
    }
  ),
  new TextBlock('Рассказываем о новостях из мира библиотек и культуры', {
      styles: {
        'text-align': 'center',
        'padding-bottom': '1em',
        'font-size': '1em',
      }
    }
  ),
  new IMGColBlock([
    mediaContentItem(NewsJSONobj.new1['id'], NewsJSONobj.new1['name'], NewsJSONobj.new1['content'], NewsJSONobj.new1['date'], NewsJSONobj.new1['image'], 'pict_react'),
    mediaContentItem(NewsJSONobj.new2['id'], NewsJSONobj.new2['name'], NewsJSONobj.new2['content'], NewsJSONobj.new2['date'], NewsJSONobj.new2['image'], 'pict_react'),
    mediaContentItem(NewsJSONobj.new3['id'], NewsJSONobj.new3['name'], NewsJSONobj.new3['content'], NewsJSONobj.new3['date'], NewsJSONobj.new3['image'], 'pict_react'),
    mediaContentItem(NewsJSONobj.new4['id'], NewsJSONobj.new4['name'], NewsJSONobj.new4['content'], NewsJSONobj.new4['date'], NewsJSONobj.new4['image'], 'pict_react'),
    mediaContentItem(NewsJSONobj.new5['id'], NewsJSONobj.new5['name'], NewsJSONobj.new5['content'], NewsJSONobj.new5['date'], NewsJSONobj.new5['image'], 'pict_react'),
    mediaContentItem(NewsJSONobj.new6['id'], NewsJSONobj.new6['name'], NewsJSONobj.new6['content'], NewsJSONobj.new6['date'], NewsJSONobj.new6['image'], 'pict_react'),
    mediaContentItem(NewsJSONobj.new7['id'], NewsJSONobj.new7['name'], NewsJSONobj.new7['content'], NewsJSONobj.new7['date'], NewsJSONobj.new7['image'], 'pict_react')
  ], {
      styles: {
        background: '#fff',
        //width: '10%',
      }
    }
  ),

]


/*------------------------*/ 
/*- функции компонентов  -*/ 
/*------------------------*/


function testFooter() {
  return `
    <footer class="footer" id="contacts">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <div class="container text-light">
        <div class="row w-100">
          <div class="col-lg-6 my-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.8934072257543!2d28.66069077720532!3d55.53422590880501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c48543054f6d6f%3A0x1af1f6fff1bb6a1c!2z0JHQuNCx0LvQuNC-0YLQtdC60LAg0JjQvNC10L3QuCDQnNCw0Y_QutC-0LLRgdC60L7Qs9C-!5e0!3m2!1sru!2sby!4v1684420952150!5m2!1sru!2sby"
              class="w-100" height="400" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div class="col-lg-6 my-4 d-flex align-items-center">
            <div>
              <h2>КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
              <p>ГУК "Централизованная библиотечная система города Новополоцка"</p>
              <p>Телефон: +375 214 521 503</p>
              <p> Факс: +375 214 521 503</p>
              <p>Эл.почта: cbs@npkultura.by</p>
            </div>
          </div>
        </div>
      </div>
      <ul class="social-icon">
        <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-vk"></ion-icon>
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a></li>
      </ul>
      `+
      // <ul class="menu">
      //   <li class="menu__item"><a class="menu__link" href="#">Домой</a></li>
      //   <li class="menu__item"><a class="menu__link" href="#">О Нас</a></li>
      //   <li class="menu__item"><a class="menu__link" href="#">Услуги</a></li>
      //   <li class="menu__item"><a class="menu__link" href="#">Контакты</a></li>
      // </ul>
      `
      <p class="p-fix">&copy;2023 ... | Все права соххранены</p>
    </footer>
  `
}

function FooterInit(content) {
  return `
    <div class="card-footer text-muted row-fix">
      ${content}   
    </div>
  `
}

function mediaContentItem(id = '', name = '', content = '', time = '', img = '', classes = '') {
  return                `<div id="${id}" class="media-body ${classes}">
                          <div class="container">
                            <div class="row new-row">
                              <div class="col-3">
                                ${imageitem('', img, "align-self-center mr-3 img-thumbnail rounded w-100", alt = 'Generic placeholder image')}
                              </div>
                              <div class="col-9 align-self-center">
                                <div class="row">
                                  <h5 class="mt-0">${name}</h5> <p class="mb-0 px-3">${time}</p>
                                  <p class="text-truncate">${content}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>`

                
}

function mediaItem(content) {
  return `<li class="media my-4">${content}</li>`
}
function MediaUlList(content, add_class = '', styles = '') {
  return `<div id="news" class="media ${add_class} container news-fix" style="${styles}"><ul class="list-unstyled">${content}</ul></div>`
}

function imageitem(id = '', img_link, img_Type, styles = '', alt = 'Generic placeholder image') {
  return `<img id="${id}" src="${img_link}" class="${img_Type}" style="${styles}", alt="${alt}">`
}

function sliderbar() {
  return `
    <div id="carouselExampleIndicators" class="carousel slide w-100" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      
      <div class="carousel-inner slider_block">
      <div class="position-absolute container-fluid hello_world" style = "z-index: 9;">
              <div class="row">
                <div class="col text-center"><a href="http://86.57.171.98:8080/alis/StartEK/index.php">
                  <h1 class="display-4 text-light">Добро пожаловать</h1>
                  <button id="btn_02" class="btn btn-primary my-3 py-3 px-3 btn-lg">Найти книгу в нашем каталоге</button>
                  </a></div>
              </div>
            </div>
        <div class="carousel-item active">
          <img src="http://novopolotsk-lib.by/images/upload_slides/Slide1.jpg" class="w-100 sliderimage"  alt="1" ismap>
          <div class="carousel-caption">
            
            <h3>Библиотека им. В. Маяковского</h3>
            <p>ул.Молодежная, 16</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="http://novopolotsk-lib.by/images/upload_slides/Slide3.jpg" class="w-100 sliderimage" alt="2" ismap>
          <div class="carousel-caption">
            
            <h3>Библиотека им. К. Симонова</h3>
            <p>ул.Молодежная, 16</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="http://novopolotsk-lib.by/images/upload_slides/Slide4.jpg" class="w-100 sliderimage" alt="3" ismap>
          <div class="carousel-caption">
            
            <h3>Библиотека им. Я. Коласа</h3>
            <p>ул.Молодежная, 104</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style = "z-index: 9;>
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style = "z-index: 9;>
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  `
}

function contentbook(style = '') {
  return `
  <div class="container-fluid semi_part">
    <div id="carouselIndicators2" class="container carousel slide w-100" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselIndicators2" data-slide-to="0" class="active"></li>
        <li data-target="#carouselIndicators2" data-slide-to="1"></li>
        <li data-target="#carouselIndicators2" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner pb-5 text-light">
         <div class="carousel-item active">
                <div class="col">
                  <div class="row mx-auto" style="width: 300px;">
                    <img src="https://168856.lp.tobiz.net/img/900x1200/d5782459fd96a1e754d45a21a5839287.jpg" class="w-100"  alt="">
                  </div>
                  <div class="row">
                    <p>Роулинг Дж.К.</p>
                  </div>
                  <div class="row">
                    <h3>Икабог (сказка для детей)</h3>
                  </div>
                  <div class="row">
                    <p class="">Когда-то королевство Корникопия было самым богатым и счастливым в мире. Король славился невообразимо красивыми усами. Кондитеры, колбасники, сыровары и виноделы изобретали такие вкусные лакомства и напитки, что те, кому посчастливилось их отведать, плакали от счастья. Страна процветала, народ радовался. Всё бы хорошо, но в туманном, мрачном Смурланде, расположенном на севере королевства, ходили слухи об Икабоге, страшном болотном чудовище. Никто не верил в существование монстра из детской сказки, пока однажды ночной кошмар не стал явью. Неужели сказочное чудовище одолеет короля и разрушит благополучие целого государства? Неужели сказка, рассказанная на ночь, обернётся для двух маленьких детей смертельно опасным приключением? Неужели надежда, правда и верная дружба смогут победить даже самую страшную беду?</p>
                  </div>
                </div>
         </div>
         <div class="carousel-item ">
                <div class="col">
                  <div class="row mx-auto" style="width: 300px;">
                    <img src="https://i.libcats.org/covers/751000/7474e0051ffa84b73c50e2194fe95ed3-g.jpg" class="w-100"  alt="">
                  </div>
                  <div class="row">
                    <p>Ананьев Ю.А.</p>
                  </div>
                  <div class="row">
                    <h3>Оптические резонаторы и лазерные пучки (научная литература)</h3>
                  </div>
                  <div class="row">
                    <p class="">На основе кратко изложенных общих законов прохождения когерентных световых пучков через оптические системы широкого класса рассмотрены процессы формирования когерентного излучения в оптических резонаторах; проанализированы факторы, определяющие пространственную структуру лазерного излучения; даны рекомендации по выберу типа и параметров резонаторов; приведены сведения о различных методах воздействия на характеристики излучения путем видоизменения резонаторов и внесения в них дополнительных элементов. Основное внимание уделено способам повышения пространственной когерентности излучения и уменьшения его расходимости.
                    Для специалистов, занимающихся разработкой и применением лазеров всех типов, а также теорией оптических систем и вопросами дифракции. Может быть рекомендована студентам оптических специальностей.</p>
                  </div>
                </div>
         </div>
         <div class="carousel-item ">
                <div class="col">
                  <div class="row mx-auto" style="width: 300px;">
                    <img src="http://novopolotsk-lib.by/images/elektronnie-posobija/sovetuem-pochitat/20230418-k.jpg" class="w-100"  alt="">
                  </div>
                  <div class="row">
                    <p>Спилман Л.Н. </p>
                  </div>
                  <div class="row">
                    <h3>Счастливые сёстры Тосканы</h3>
                  </div>
                  <div class="row">
                    <p class="">Представляем вашему вниманию книгу Лори Нельсон Спилман «Счастливые сёстры Тосканы».

                    </p><p class="">Вот уже двести лет над младшими сестрами большой семьи из Тосканы тяготеет проклятие: они никогда не познают любви, не выйдут замуж, не будут иметь детей…
                    
                    </p><p class="">И хотя семья давно уже живет в Америке, это проклятие все еще действует.
                    
                    </p><p class="">Эмилию вполне устраивает ее одинокая жизнь, целиком посвященная семье, а Люси страстно мечтает о том, чтобы выйти замуж, и в каждом парне видит потенциального жениха. Но вот в их жизнь врывается тетя Поппи с поразительным предложением: она просит сопровождать ее на родину в Италию, где в день своего восьмидесятилетия должна встретиться со своей первой и единственной любовью и таким образом раз и навсегда разрушить проклятие. И девушки отправляются в путешествие, даже не догадываясь, что их жизнь круто изменится…
                    
                    </p><p class="">Эту книгу можно прочесть в библиотеке-филиале №6 им.В.Короткевича.</p>
                  </div>
                </div>
         </div>
      </div>
      <a class="carousel-control-prev" href="#carouselIndicators2" role="button" data-slide="prev" style="padding-bottom:25em">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselIndicators2" role="button" data-slide="next" style="padding-bottom:25em">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  `
}

function alink(a_link, content, linkType, styles = 'color: white') {
  return `<a href="${a_link}" class="${linkType}" style="${styles}">${content}</a>`
}
function navitem(content) {
  return `<li class="nav-item">${content}</li>`
}
function navbar(content, image, style='') {
  return `
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary navbar-custom" style="${style}">
      <a class="navbar-brand font-weight-bold" href="#">
        <img src="${image}" width="40" height="40" class="d-inline-block align-top" alt="">
        ЦБС Новополоцк
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">

        <ul class="navbar-nav mr-auto px-5">${content}</ul>

        <form class="form-inline">

          <button id="btn_01" type="button" class="btn btn-primary mr-sm-2 my-2 my-sm-0"  aria-pressed="false">Войти</button>
          
          <input class="form-control mr-sm-2" type="search" placeholder="Что хотите найти?" aria-label="Search">
          <button class="btn btn-primary my-2 my-sm-0" type="submit">Поиск</button>

        </form>
      </div>
    </nav>
  `
} 
// альтернатива обработке события нажатия кнопки data-toggle="modal" data-target=".bd-example-modal-lg"

function row(content, styles = '') {
  return `<div class="row row-fix" style="${styles}">${content}</div>`
}
function col(content) {
  return `<div class="${col_size}">${content}</div>`
}

function css(styles = {}) {
  if (typeof styles === 'string') return styles
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}


/*------------------------*/ 
/*-   функции данных     -*/ 
/*------------------------*/

//функция должна принять в себя JSON объект, а вернуть заполненный массив, который я и использую в экземплярах классов




/*------------------------*/ 
/*-       Рендер         -*/ 
/*------------------------*/ 


const site = new Site('#site')

site.render(model)



/*---------------------------*/ 
/*-         Подвал          -*/ 
/*---------------------------*/ 

class MFooter {
  constructor(selector1) {
    this.$el1 = document.querySelector(selector1)
    this.init1()
  }
  init1() {
    this.$el1.insertAdjacentHTML('beforeend', this.mainFooter)
  }
  get mainFooter() {
    return mainFooterInit(testFooter())
  }
}

new MFooter('#app')
  function mainFooterInit(content) {
    return ` ${content} `
  }


/*-----------------------*/ 
/*-   Форма добавления  -*/ 
/*-----------------------*/ 


class SideBar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector)
    this.update = updateCallback
    this.init()
  }
  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    this.$el.addEventListener('submit', this.add.bind(this))
  }
  get template() {
    return [ 
      block('text'),
      block('title')  
    ].join('')
  }
  add(event) {
    event.preventDefault()
    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value
    
    const newBlock = type === 'text'
      ? new TextBlock(value, {styles})
      : new TitleBlock(value, {styles})

    this.update(newBlock)
    event.target.value.value = ''
    event.target.styles.value = ''
  }
}

const updateCallback = newBlock => {
  model.push(newBlock)
  site.render(model)
}

new SideBar('#panel', updateCallback)
function block(type) {
  return `
    <form name="${type}" style="padding: 1rem">
      <h5>${type}</h5>
      <div class="form-group w-25">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group w-25">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
  `
}



/*------------------------*/ 
/*-   Модальное окно     -*/ 
/*------------------------*/

// function modalText() {
//   return `
//     <div class="modal fade" tabindex="-1" role="dialog">
//       <div class="modal-dialog" role="document">
//         <div class="modal-content">
//           <div class="modal-header bg-light">
//             <h5 class="modal-title">${title}</h5>
//             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div class="modal-body">
//             <p>${content}</p>
//           </div>
//           <div class="modal-footer bg-light">
//             <button type="button" class="btn btn-secondary" data-dismiss="modal">${noBtnLabel}</button>
//             <button type="button" class="btn btn-primary modal-success-btn" data-dismiss="modal">${yesBtnLabel}</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   `
// }


var modalWrap = null;

function LogInModal() {
  return `
    <div class="form-row align-items-center d-block">
      <div class="col-auto">
        <label class="sr-only" for="inlineFormInputGroup">Почта</label>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">@</div>
          </div>
          <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Введите почту">
        </div>
      </div>
      <div class="col-auto">
        <label class="sr-only" for="inlineFormInput">Пароль</label>
        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Введите пароль">
      </div>
      <div class="col-auto">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="autoSizingCheck">
          <label class="form-check-label" for="autoSizingCheck">
            Запомнить меня
          </label>
        </div>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-2 btn-block modal-success-btn">Войти</button>
        <button type="button" class="btn btn-link mb-2 btn-block" data-dismiss="modal">Отмена</button>
      </div>
      <div class="col-auto">
        <div class="form-row">
          <div class="col">
            <button class="btn btn-link btn-sm">Регистрация</button>
          </div>
          <div class="col">
            <button class="btn btn-link btn-sm">Забыли пароль?</button>
          </div>
        </div>
      </div>
    </div>
  `
}

function NewsModal(context) {
  return `
    <div class="modal-header">
      <div class="row">
        <p>${context['date']}</p>
      </div>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="container">
      <div class="row mx-auto" style="width: 500px;">
        <img src="${context['image']}" class="w-100 my-5"  alt="">
      </div>
      <div class="row">
        <h3>${context['name']}</h3>
      </div>
      <div class="row">
        <p class="">${context['content']}</p>
      </div>
    </div>
  `
}

function ImageModal(context) {
  return `
    <div class="modal-header">
      <div class="row">
      </div>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="container-fluid">
      <div class="row mx-auto">
        <img src="${context['imagelink']}" class="w-100"  alt="">
      </div>
    </div>
  `
}

const showModal = (windowtype='', windowsize='', callback) => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
    <div class="modal fade bd-example-modal-lg" id="ModalCenter" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog ${windowsize} modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <form>
              ${windowtype}
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  modalWrap.querySelector('.bd-example-modal-lg').onclick = callback; // .modal-success-btn было для ответа

  document.body.append(modalWrap);

  var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
}

document.getElementById('btn_01').onclick = () => showModal(LogInModal(), 'modal-sm', () => {
  console.log('Всё работает');
});


document.getElementById(NewsJSONobj.new1['id']).onclick = () => showModal(NewsModal(NewsJSONobj.new1), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(NewsJSONobj.new2['id']).onclick = () => showModal(NewsModal(NewsJSONobj.new2), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(NewsJSONobj.new3['id']).onclick = () => showModal(NewsModal(NewsJSONobj.new3), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(NewsJSONobj.new4['id']).onclick = () => showModal(NewsModal(NewsJSONobj.new4), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(NewsJSONobj.new5['id']).onclick = () => showModal(NewsModal(NewsJSONobj.new5), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(NewsJSONobj.new6['id']).onclick = () => showModal(NewsModal(NewsJSONobj.new6), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(NewsJSONobj.new7['id']).onclick = () => showModal(NewsModal(NewsJSONobj.new7), 'modal-lg', () => {
  console.log('Всё работает');
});


document.getElementById(GaleryJSONobj.pict1['id']).onclick = () => showModal(ImageModal(GaleryJSONobj.pict1), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(GaleryJSONobj.pict2['id']).onclick = () => showModal(ImageModal(GaleryJSONobj.pict2), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(GaleryJSONobj.pict3['id']).onclick = () => showModal(ImageModal(GaleryJSONobj.pict3), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(GaleryJSONobj.pict4['id']).onclick = () => showModal(ImageModal(GaleryJSONobj.pict4), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(GaleryJSONobj.pict5['id']).onclick = () => showModal(ImageModal(GaleryJSONobj.pict5), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(GaleryJSONobj.pict6['id']).onclick = () => showModal(ImageModal(GaleryJSONobj.pict6), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(GaleryJSONobj.pict7['id']).onclick = () => showModal(ImageModal(GaleryJSONobj.pict7), 'modal-lg', () => {
  console.log('Всё работает');
});
document.getElementById(GaleryJSONobj.pict8['id']).onclick = () => showModal(ImageModal(GaleryJSONobj.pict8), 'modal-lg', () => {
  console.log('Всё работает');
});
