
const text_m = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque mollitia corporis nobis ea officia veniam amet voluptates nostrum exercitationem, reprehenderit aperiam saepe numquam ab, corrupti tempora? Sapiente sed praesentium fugiat!
`
const image_m = `
https://i.ibb.co/wQZVxxk/wave.png
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
const col_size = ' col-lg'
const empty_style = ''
const link_badge = ' badge badge-dark w-100'
const link_nav = ' nav-item nav-link'



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
    const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
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
class ImageBlock extends Block {
  constructor(value, options) {
    super('image', value, options)
  }
  toHTML() {
    const {imageStyles: _is, alt = '', styles} = this.options
    return row(`<img src="${this.value}" alt="${alt}" style="${css(_is)}"/>`, css(styles))
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

class MainHeader extends Block {
  constructor(value, options) {
    super('mainhead', value, options)
  }
  toHTML() {
    const html = this.value.map(col)
    return HeaderInit(row(html.join(''), css(this.options.styles)))
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


  new ImageBlock(image_m, {
    styles: {
      //border: '10px solid red',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '100%'
    },
    alt: ''
  }
),

new NavigationBlock([
  alink('#','Структура',link_nav),
  alink('#','Контакты',link_nav),
  alink('#','Услуги',link_nav),
  alink('#','Проекты',link_nav)
], {
    styles: {}
  }
),

new TextBlock(text_m, {
  styles: {
    background: 'linear-gradient(to left, #e3f2fd, #ccc)',
    padding: '1rem',
    'font-weight': 'bold'
  }
}
),

  // new TitleBlock('SITE', {
  //     tag: 'h1',
  //     styles: {
  //       //border: '10px solid red',
  //     }
  //   }
  // ),

  
  new ColumnBlock([
    alink('#', text_m, text_secondary),
    alink('#', text_m, text_secondary),
    alink('#', text_m, text_secondary),
    alink('#', text_m, text_secondary)
  ], {
      styles: {
        // background: 'linear-gradient(to bottom, #000, #fff)',
        //background: '#ccc',
        color: '#000',
        padding: '2rem',
        'font-weight': 'bold',
        'border-block-end': '1px solid #ddd',
        //'background-image': noise,
        //width: '10%',
      }
    }
  ), 

  new ColumnBlock([
    alink('http://86.57.171.98:8080/alis/StartEK/index.php','Электронный каталог', 'btn btn-primary btn-lg')
  ], {
      styles: {
        color: '#000',
        padding: '2rem',
        'font-weight': 'bold',
        'border-block-end': '1px solid #ddd',
      }
    }
  ), 

  new IMGColBlock([
    mediaContentItem('Новость 1', text_m, '20.20.2000', text_image_m, '#'),
    mediaContentItem('Новость 2', text_m, '20.20.2000', text_image_m),
    mediaContentItem('Новость 3', text_m, '20.20.2000', text_image_m)
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
    <footer class="footer">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <ul class="social-icon">
        <li class="social-icon__item"><a class="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a></li>
      </ul>
      <ul class="menu">
        <li class="menu__item"><a class="menu__link" href="#">Домой</a></li>
        <li class="menu__item"><a class="menu__link" href="#">О Нас</a></li>
        <li class="menu__item"><a class="menu__link" href="#">Услуги</a></li>
        <li class="menu__item"><a class="menu__link" href="#">Контакты</a></li>

      </ul>
      <p>&copy;2023 ... | Все права соххранены</p>
    </footer>
  `
}


function HeaderInit(content) {
  return `
    <div class="card-header row-fix">
      ${content} 
    </div>
  `
}
function FooterInit(content) {
  return `
    <div class="card-footer text-muted row-fix">
      ${content}   
    </div>
  `
}

function mediaContentItem(name = '', content = '', time = '', img = '', a_link = '') {
  return `
  <a href="${a_link}" class="media bg-transparent" style="padding: 1rem">
    <div class="media-body">
      <div class="container">
        <div class="row">
          <div class="col-2"><img class="align-self-center mr-3 img-thumbnail rounded w-100" src="${img}}" alt="Generic placeholder image"></div>
          <div class="col-10">
            <div class="row">
              <h5 class="mt-0">${name}</h5> <p class="mb-0 px-3">${time}</p>
              <p class="mb-0">${content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
  `
}
function mediaItem(content) {
  return `
  <li class="media my-4">${content}</li>
  `
}
function MediaUlList(content, add_class = '', styles = '') {
  return `<div class="media ${add_class}" style="${styles}"><ul id="ul_1" class="list-unstyled">${content}</ul></div>`
}

function alink(a_link, content, linkType) {
  return `<a href="${a_link}" class="${linkType}" style="color: white">${content}</a>`
}
function navitem(content) {
  return `<li class="nav-item">${content}</li>`
}
function navbar(content, image) {
  return `
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">
        <img src="${image}" width="30" height="30" class="d-inline-block align-top" alt="">
        
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">

        <ul class="navbar-nav mr-auto">${content}</ul>

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
/*-       Рендер         -*/ 
/*------------------------*/ 


const site = new Site('#site')

site.render(model)


/*---------------------------*/ 
/*- Тестовые Шапка и Подвал -*/ 
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
//             <p>${description}</p>
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

const showModal = (title, description, yesBtnLabel = 'Yes', noBtnLabel = 'Close', callback) => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
    <div class="modal fade bd-example-modal-lg" id="ModalCenter" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <form>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  modalWrap.querySelector('.modal-success-btn').onclick = callback;

  document.body.append(modalWrap);

  var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
}

document.getElementById('btn_01').onclick = () => showModal('', '', "", "", () => {
  console.log('Всё работает');
});










