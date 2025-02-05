// "use client";

import "./HelpUs.css";
import Image from "next/image";
import {
    backgroundImageWithoutPhoto,
    HELP_COVER,
    HELP_COVER_LITE,
} from "../../shared/Constants";
import { TopImage } from "@/entities/TopImage/TopImage";
import Link from "next/link";
import qrcode from "./qr.webp";

export const HelpUs = () => {
    return (
        <section
            className="helpus"
            style={{
                backgroundImage: `${backgroundImageWithoutPhoto}`,
            }}
        >
            <TopImage src={HELP_COVER} srclite={HELP_COVER_LITE} />
            <div className="helpus__conteiner">
                <h1 className="title">Дорогие друзья!</h1>

                <article className="helpus__article">
                    <p className="text">
                        ПКО МОФ &laquo;Российский фонд мира&raquo; принимает
                        благотворительные пожертвования на миротворческую
                        деятельность и реализацию социально-значимых проектов (в
                        соответствии с Уставом Фонда мира).
                    </p>
                    <ol className="helpus__numlist helpus__article">
                        <li className="li">
                            Оказание гуманитарной помощи жителям Курска.
                            Отправка жизненно необходимых вещей (продукты
                            питания, одежда, медикаменты и т.д.). Назначение
                            платежа - &laquo;Курск мы с тобой&raquo;.
                        </li>
                        <li className="li">
                            Помощь пациентам хосписа Гринберга (Хоспис Закамск).
                            Назначение платежа - &laquo;Лучик Добра&raquo;.
                        </li>
                        <li className="li">
                            Создание{" "}
                            <Link
                                href={"/projects/ryabinovaya-alleya"}
                                className="link"
                            >
                                места ПАМЯТИ в аллее Героев, благоустройство
                                аллеи:
                            </Link>{" "}
                            посадка саженцев рябины, посадка саженцев голубой
                            ели рядом с памятной Стелой Героям Советского Союза.
                            Назначение платежа - &laquo;Рябиновой аллее Героев
                            БЫТЬ!&raquo;
                        </li>
                    </ol>
                </article>

                <article className="helpus__article">
                    <p className="text">
                        Реквизиты ПКО МОФ &laquo;Российский фонд мира&raquo; для
                        перечисления средств:
                    </p>
                    <ul className="helpus__list helpus__article">
                        <li className="li">р/с 40703810049020100015</li>
                        <li className="li">
                            Волго-Вятский банк ПАО Сбербанк г. Нижний Новгород
                        </li>
                        <li className="li">кор. счет 30101810900000000603</li>
                        <li className="li">БИК 042202603</li>
                        <li className="li">ИНН 5902701155/590201001</li>
                        <li className="li">Важно указать назначение платежа</li>
                    </ul>
                </article>
                <div className="helpus__qr">
                    <Image
                        className="helpus__image"
                        src={qrcode}
                        width={200}
                        height={200}
                        alt="QR код"
                    />
                </div>
                <article className="helpus__article">
                    <p className="text">
                        Как сделать пожертвование через QR-код?
                    </p>
                    <ul className="helpus__list helpus__article">
                        <li className="li">
                            Заходим в приложение вашего банка
                        </li>
                        <li className="li">
                            Находим иконку платежа по QR-коду
                        </li>
                        <li className="li">Сканируем QR-код</li>
                        <li className="li">
                            Вставляем свою сумму и указываем назначение платежа
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};
