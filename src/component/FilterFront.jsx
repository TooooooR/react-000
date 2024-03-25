import React from "react";
import "../styles/FilterFront.css";

function FilterFrontOnly() {
    return (
        <div>
            <div>
              <h3 className="titles">Тип закладу</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="restaurant"
                    value="restaurant"
                  />
                  <label for="restaurant">Ресторан</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="cafe"
                    value="cafe"
                  />
                  <label for="cafe">Кафе</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bar"
                    value="bar"
                  />
                  <label for="bar">Бар/Паб</label>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="titles">Ціна за людину</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="restaurant"
                    value="restaurant"
                  />
                  <label for="restaurant">До 1000 грн</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="cafe"
                    value="cafe"
                  />
                  <label for="cafe">1000-2000 грн</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bar"
                    value="bar"
                  />
                  <label for="bar">Від 2000 грн</label>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="titles">Місткість людей</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="restaurant"
                    value="restaurant"
                  />
                  <label for="restaurant">20</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="cafe"
                    value="cafe"
                  />
                  <label for="cafe">20-50</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bar"
                    value="bar"
                  />
                  <label for="bar">50+</label>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="titles">Вимоги</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="restaurant"
                    value="restaurant"
                  />
                  <label for="restaurant">Можна з своїм алкоголем</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="cafe"
                    value="cafe"
                  />
                  <label for="cafe">Можна шуміти після 23:00</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bar"
                    value="bar"
                  />
                  <label for="bar">З виглядом на річку (водойму)</label>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="titles">Додаткові послуги</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="restaurant"
                    value="restaurant"
                  />
                  <label for="restaurant">Паркінг</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="cafe"
                    value="cafe"
                  />
                  <label for="cafe">Wi-Fi</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bar"
                    value="bar"
                  />
                  <label for="bar">LED екран</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bar"
                    value="bar"
                  />
                  <label for="bar">Проектор</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bar"
                    value="bar"
                  />
                  <label for="bar">Акустична система</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bar"
                    value="bar"
                  />
                  <label for="bar">Фотозона</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bar"
                    value="bar"
                  />
                  <label for="bar">Кондиціонер</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bar"
                    value="bar"
                  />
                  <label for="bar">Можна з тваринами</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bar"
                    value="bar"
                  />
                  <label for="bar">Кальяни</label>
                </li>
              </ul>
            </div>
            <div>
                <button className="buttonn">Submit</button>
            </div>
        </div>
    );
  }
export default FilterFrontOnly;