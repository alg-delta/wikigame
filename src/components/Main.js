import React from "react";
import Carousel from "react-bootstrap/Carousel";
import data from "./data";
import Image from "react-bootstrap/Image";

export default function Main() {
  function showMessage() {
    alert("Гра куплена");
  }
  return (
    <div className="main">
      <h1 className="text-center">Heart of Iron 4</h1>
      <Carousel className="carousel">
        <Carousel.Item style={{ textAlign: "center" }}>
          <Image src="3.jpg" height="400px" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ textAlign: "center" }}>
          <Image src="1.jpg" height="400px" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ textAlign: "center" }}>
          <Image src="2.jpg" height="400px" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p className="text">
        Hearts of Iron IV (у перекладі з англ. "Залізні серця IV"; у російській
        версії згадується під назвою "День Перемоги IV"; скор. HoI IV) -
        комп'ютерна гра в жанрі глобальної стратегії, розроблена шведською
        студією Paradox Development Studio і видана компанією Paradox
        Interactive. Реліз гри відбувся 6 червня 2016 року. Гра отримала
        позитивні оцінки від критиків, хоча багато з них відзначають проблеми з
        інтерфейсом та високий поріг входження.
      </p>
      <h3>Ігровий процес</h3>
      <p>
        Гра охоплює період Другої італо-етіопської війни, Громадянської війни в
        Іспанії, Громадянської війни в Китаї, Другої японо-китайської війни,
        Другої світової війни. У грі існують два сценарії — дві вихідні точки: 1
        січня 1936 року і 14 серпня 1939 року — та два шляхи розвитку гри:
        неісторичний (країни будуть обирати один із доступних шляхів) і
        історичний (країни будуть слідувати історичній хронології). Відмітною
        особливістю гри є національні фокуси. Продвигаючись по дереву
        національних фокусів, гравець отримує національні духи, які надають
        певні бонуси для країни, або допомогу в промисловості або дослідженнях,
        або ціль війни проти іншої країни. Деякі фокуси взаємовиключаються.
        Великі держави (Радянський Союз, Франція, Третій Рейх, Італія, Велика
        Британія, США, Японія) мають власні унікальні дерева фокусів. Куповані і
        іноді безкоштовні додатки додають унікальні дерева також для другорядних
        країн. Проте в більшості малих країн відсутні унікальні національні
        фокуси, замість цього країни мають стандартне, універсальне дерево
        фокусів. Виходячи з обраної ідеології країна може прийти до певної
        ідеології: демократії, комунізму, фашизму або так званого нейтралітету.
        У сценарії 1939 року у країн вже є ряд виконаних фокусів, включаючи
        політичні, що, як правило, виключає можливість зміни політичного
        ландшафту і ідеології.
      </p>
      <h2>Системні вимоги:</h2>
      <div className="systemSpecs">
        <p>Операційна система: {data.operatingSystem}</p>
        <p>Процесор: {data.processor}</p>
        <p>Оперативна пам'ять: {data.ram}</p>
        <p>Відеокарта: {data.graphicsCard}</p>
        <p>DirectX: {data.directX}</p>
        <p>Місце на диску: {data.diskSpace}</p>
      </div>
      <button className="download" onClick={showMessage}>
        Завантажити
      </button>
    </div>
  );
}