import React, { useState } from "react";
import "../styles/FilterStyle.css";

function Filter({ setResponseData }) {
    const [formState, setFormState] = useState({
        festiveEvents: false,
        teamEvents: false,
        educationalEvents: false,
        below500: false,
        from500To1000: false,
        from1000To3000: false,
        from3000To5000: false,
        eventPlanning: false,
        privateDinner: false,
        additionalEquipment: false,
        service: false,
        helpWithOrganization: false,
        romanticAtmosphere: false,
        aPlaceInTheYard: false,
        liveMusic: false,
        airConditioning: false,
        WiFi: false,
        projector: false,
        parking: false
    });

    const onChangeInputState = (e) => {
        const { name, checked } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: checked
        }));
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        const queryString = createQueryString(formState);
        const apiUrl = `http://127.0.0.1:8000/api/v1/?${queryString}`;
        
        try {
            const response = await fetch(apiUrl, {
                method: 'GET'
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
    
            const data = await response.json();
            console.log("Data received from API:", data);
            setResponseData(data.results);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    function createQueryString(params) {
        const groups = {
            type: {
                festiveEvents: 'Святкові заходи',
                teamEvents: 'Командні заходи',
                educationalEvents: 'Навчальні заходи' 
            },
            price_category: {
                below500: '0 - 500',
                from500To1000: '500 - 1000',
                from1000To3000: '1000 - 3000',
                from3000To5000: '3000 - 5000'
            },
            services: {
                eventPlanning: 'Планування заходів',
                privateDinner: 'Приватна вечеря',
                additionalEquipment: 'Додаткове обладнання',
                service: 'Обслуговування',
                helpWithOrganization: 'Допомога з організацією'
            },
            amenities: {
                romanticAtmosphere: 'Романтична атмосфера',
                aPlaceInTheYard: 'Місце на дворі',
                liveMusic: 'Жива мізика',
                airConditioning: 'Кондиціонер',
                WiFi: 'Wi-Fi',
                projector: 'Проєктор',
                parking: 'Паркування'
            }
        };

        const searchParams = [];

        for (const [group, keys] of Object.entries(groups)) {
            const trueParams = Object.keys(keys).filter(key => params[key]).map(key => keys[key]).join(';');
            if (trueParams) {
                searchParams.push(`${group}=${encodeURIComponent(trueParams)}`);
            }
        }

        return searchParams.join('&');
    }

    return (
        <div className="mainwrap">
            <form onSubmit={onSubmitForm}>
                <div className="wrapper_for_checkbox">
                    <h3 className="titles">Тип заходу</h3>
                    <ul className="choose">
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="festiveEvents"
                                    checked={formState.festiveEvents}
                                    onChange={onChangeInputState}
                                />
                                Святкові заходи
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="teamEvents"
                                    checked={formState.teamEvents}
                                    onChange={onChangeInputState}
                                />
                                Командні заходи
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="educationalEvents"
                                    checked={formState.educationalEvents}
                                    onChange={onChangeInputState}
                                />
                                Навчальні заходи
                            </label>
                        </li>
                    </ul>
                </div>

                <div className="wrapper_for_checkbox">
                    <h3 className="titles">Ціна за людину</h3>
                    <ul className="choose">
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="below500"
                                    checked={formState.below500}
                                    onChange={onChangeInputState}
                                />
                                До 500 грн
                            </label>
                        </li>
                        <li>
                            <label for="cafe">
                                <input
                                    type="checkbox"
                                    name="from500To1000"
                                    checked={formState.from500To1000}
                                    onChange={onChangeInputState}
                                />
                                500-1000 грн
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="from1000To3000"
                                    checked={formState.from1000To3000}
                                    onChange={onChangeInputState}
                                />
                                1000-3000 грн
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="from3000To5000"
                                    checked={formState.from3000To5000}
                                    onChange={onChangeInputState}
                                />
                                3000-5000 грн
                            </label>
                        </li>
                    </ul>
                </div>

                <div className="wrapper_for_checkbox">
                    <h3 className="titles">Послуги</h3>
                    <ul className="choose">
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="eventPlanning"
                                    checked={formState.eventPlanning}
                                    onChange={onChangeInputState}
                                />
                                Планування заходів
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="privateDinner"
                                    checked={formState.privateDinner}
                                    onChange={onChangeInputState}
                                />
                                Приватна вечеря
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="additionalEquipment"
                                    checked={formState.additionalEquipment}
                                    onChange={onChangeInputState}
                                />
                                Додаткове обладнання
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="service"
                                    checked={formState.service}
                                    onChange={onChangeInputState}
                                />
                                Обслуговування
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="helpWithOrganization"
                                    checked={formState.helpWithOrganization}
                                    onChange={onChangeInputState}
                                />
                                Допомога з організацією
                            </label>
                        </li>
                    </ul>
                </div>


                <div className="wrapper_for_checkbox">
                    <h3 className="titles">Платні\додаткові послуги</h3>
                    <ul className="choose">
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="romanticAtmosphere"
                                    checked={formState.romanticAtmosphere}
                                    onChange={onChangeInputState}
                                />
                                Романтична атмосфера
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="aPlaceInTheYard"
                                    checked={formState.aPlaceInTheYard}
                                    onChange={onChangeInputState}
                                />
                                Місце на дворі
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="liveMusic"
                                    checked={formState.liveMusic}
                                    onChange={onChangeInputState}
                                />
                                Жива музика
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="airConditioning"
                                    checked={formState.airConditioning}
                                    onChange={onChangeInputState}
                                />
                                Кондиціонер
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="WiFi"
                                    checked={formState.WiFi}
                                    onChange={onChangeInputState}
                                />
                                Wi-Fi
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="projector"
                                    checked={formState.projector}
                                    onChange={onChangeInputState}
                                />
                                Проєктор
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name="parking"
                                    checked={formState.parking}
                                    onChange={onChangeInputState}
                                />
                                Паркування
                            </label>
                        </li>
                    </ul>
                </div>                

                <div>
                    <button className="buttonn" type="submit">Select</button>
                </div>

            </form>
            
            {/* <div>
                {responseData && responseData.results.map((item, index) => (
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <p>Тип: {item.type}</p>
                        <p>Номер телефону: {item.work_mobile_number}</p>
                        <p>Адреса: {item.address.city}, {item.address.street}, {item.address.build_number}</p>
                        <p>Цінова категорія: {item.price_category.price_range}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default Filter;