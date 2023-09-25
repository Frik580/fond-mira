// "use client";

import Member from "../../entities/Member/Member";
import "./Direction.css";

export const Direction = () => {
    return (
        <section className="direction">
            <ul className="direction__conteiner">
                <Member
                    image="pech"
                    text=", 
                    заместитель председателя Правления, 
                    член Совета ПРООУ «Ассоциация «Луч», 
                    Почётный работник дополнительного образования РФ"
                    alt="Печкурова Ольга Владимировна"
                />
                <Member
                    image="bol"
                    text=", 
                    член Правления, учитель Гимназии №5 города Перми, Заслуженный учитель РФ"
                    alt="Большакова Татьяна Владимировна"
                />
                <Member
                    image="bob"
                    text=", 
                    член Правления, ландшафтный дизайнер, 
                    член Совета ПРООУ «Ассоциация «ЛУЧ», 
                    Почётный работник общего образования РФ"
                    alt="Бобрикова Ольга Павловна"
                />
                <Member
                    image="vin"
                    text=", 
                    член Правления, председатель Попечительского совета, 
                    доцент Открытого института профессионального образования», 
                    Заслуженный учитель РФ, кандидат педагогических наук"
                    alt="Виноградова Валентина Анатольевна"
                />
                <Member
                    image="gla"
                    text=", 
                    член Правления, 
                    председатель Регионального отделения Российского военно-исторического общества, 
                    директор школы №41 города Перми"
                    alt="Гладнев Игорь Алексеевич"
                />
                <Member
                    image="ast"
                    text=", 
                    член Правления, графический дизайнер, бренд-дизайнер, 
                    внучка Героя Советского Союза В.М. Астафьева"
                    alt="Астафьева Олеся Владимировна"
                />
                <Member
                    image="iko"
                    text=", 
                    член Правления, член Совета ПРООУ «Ассоциация «ЛУЧ», 
                    директор школы №77 города Перми, 
                    Почётный  работник профессионального образования РФ"
                    alt="Иконникова Елена Евгеньевна"
                />
                <Member
                    image="kur"
                    text=", 
                    член Правления, директор школы №9 города Перми, 
                    Почётный работник общего образования РФ"
                    alt="Курдина Наталья Анатольевна"
                />
                <Member
                    image="svy"
                    text=", 
                    член Правления, начальник отдела «Художественное творчество» 
                    дворца детского (юношеского) творчества города Перми"
                    alt="Свяжина Марина Владиславна"
                />
            </ul>
        </section>
    );
};
