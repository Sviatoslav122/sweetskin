import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core'
import { MainListItem } from '@app/models/main-list-item'
import { InteractionService } from '@app/core/services/interaction.service'
import { ScreenSize } from '@app/enums/screen-size'
import { BlockquoteComponent } from '@app/shared/blockquote/blockquote.component'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit, AfterViewInit {
  @ViewChild('start', { static: false })
  start: BlockquoteComponent
  quote = 'Мастера студии Sweet Skin'
  public heading_1 = `Елена`
  public subheading_1 = `Ведущий мастер шугаринга, косметолог `

  public heading_2 = `Ольга`
  public subheading_2 = `Мастер шугаринга, косметолог`

  public heading_3 = `Галерея`
  public subheading_3 = ``

  public slides: any = {
    webp: [
      'assets/images/team-carousel/1.webp',
      'assets/images/team-carousel/2.webp',
      'assets/images/team-carousel/3.webp',
      'assets/images/team-carousel/4.webp',
      'assets/images/team-carousel/5.webp',
      'assets/images/team-carousel/6.webp',
    ],
    jpg: [
      'assets/images/team-carousel/1.jpg',
      'assets/images/team-carousel/2.jpg',
      'assets/images/team-carousel/3.jpg',
      'assets/images/team-carousel/4.jpg',
      'assets/images/team-carousel/5.jpg',
      'assets/images/team-carousel/6.jpg',
    ],
  }

  listItem_1: MainListItem[]
  listItem_2: MainListItem[]
  constructor(public interactionService: InteractionService) {
    const ext = this.interactionService.isSafari ? '.jpg' : '.webp'

    this.listItem_1 = [
      {
        image: 'assets/images/team/sm/elena' + ext,
        imageMD: 'assets/images/team/md/elena' + ext,
        text: `Я Голядинец Елена и я ведущий мастер шугаринга, косметолог и по совместительству владелица студии Sweet Skin. Я люблю создавать красоту, по этому нашла своё призвание в том, что помогаю девушкам совершенствовать своё тело и кожу. 

Специалистом по шугарингу я стала в 2015 году и с того времени посетила неисчислимое количество различных курсов, семинаров, чемпионатов и тренингов, все время развиваясь и совершенствуясь.
Благодаря чему в 2019 году на Всеукраинском чемпионате СМКУ мне удалось выиграть кубок 🏆 и занять 1 место по депиляции в категории профессионалы.

С 2017 года я освоила косметологию в лучшей международной школе косметологии Космотрейд и влюбилась в это.
Все это время я интенсивно практикую Шугаринг и различные неинвазивные косметологические процедуры в студии Sweet Skin. К тому же консультирую клиентов по поводу домашнего ухода, даю советы по проблемам с кожей и занимаюсь разбором составов косметологических средств.

Благодарная улыбка моих клиентов — моя главная награда! Приходи к нам в студию и увидишь, как ощущение уверенности — меняет жизнь!`,
      },
    ]

    this.listItem_2 = [
      {
        image: 'assets/images/team/sm/olga' + ext,
        imageMD: 'assets/images/team/md/olga' + ext,
        text: `Меня зовут Ольга. Я мастер шугаринга и косметолог с 7-ми летним стажем. 

Мое знакомство с Бьюти-индустрией началось в 2013 году с курсов по депиляции. Шугаринг в то время был мало известен и не популярен, по этому могу твёрдо сказать, что я стояла у самых истоков шугаринга в Украине и развивалась вместе с ним. За годы работы я не только отточила технику сахарной депиляции до совершенства, а и досконально изучила кожу и кожные заболевания, что сильно помогает в консультирование наших клиентов.

Также я практикующий косметолог и уже 5 лет работаю с лицом. Я решаю проблемы с высыпаниями, морщинамы, дряблой кожей, пигментацией, камедонами и многими другими эстетическими нюансами БЕЗ ПРИБЕГАНИЯ К УКОЛАМ!
Я не только качественно провожу процедуры в стенах кабинета, но и подобраю правильный домашний уход под каждый тип кожи и проблематику. 
Моя задача - помочь клиентам быть ухоженными, привлекательными и здоровыми, и я с радостью поделюсь с вами своими знаниями и большим опытом!
Жду вас на процедуры в Sweet Skin.`,
      },
    ]
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.interactionService.scrollVertically(this.start.ref.nativeElement)
  }
}
