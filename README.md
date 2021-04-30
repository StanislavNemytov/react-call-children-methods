Тестовое задание

Необходимо реализовать компонент с методом validate.
Компонент может быть вложен сам в себя.

[Deploy](https://stasnemy-test-9-react.netlify.app/)

При вызове метода validate, необходимо что - бы компонент вызывал данный метод у своих детей(только validate-component).

Схематично:

    <!-- 1 -->  <validate-component>
                  <some-component>
        <!-- 2 -->  <validate-component></validate-component>
                  </some-component>

                  <some-component>
        <!-- 3 -->  <validate-component>
        <!-- 4 -->  <validate-component /></validate-component>
                  </some-component>

      <!-- 5 -->  <validate-component></validate-component>

                </validate-component>

Вызов метода validate у компонента 1 должен вызвать данный метод у компонентов 2, 3, 5.
Вызов метода у компонента 3 должен вызвать метод у компонента 4.

Вложенность компонентов может быть неограничена.

Итоговый проект необходимо разместить на github.com
