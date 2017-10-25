"# volt-test-reactjs" 
<h1>Общие требования</h1>

<p>Задание заключается в реализации SPA-приложение на <code>React</code>. Должны быть выполнены следующие условия:</p>

<ul>
<li>Необходимо выполнить задание используя заготовку, доступную по ссылке:
<a href="https://drive.google.com/file/d/0B9gbscdfWqaqOFJtWUs3YjZxOWc/view?usp=sharing" rel="nofollow" target="_blank">https://drive.google.com/file/d/0B9gbscdfWqaqOFJtWUs3YjZxOWc/view?usp=sharing</a></li>
<li>Приложение должно быть упаковано в JS-бандл с помощью <code>webpack</code></li>
<li>Приложение должно иметь навигацию c использованием <code>History API</code></li>
<li>В зависимости от выбранного интерфейса должен быть установлен соответствующий <code>document title</code></li>
<li>Интерфейсы должны быть свёрстаны с применением <code>react-bootstrap</code></li>
<li>Выбор реализации <code>data flow</code> на ваше усмотрение</li>
</ul>

<h1>Основное задание. Интерфейсы покупателей и товаров.</h1>

<p>Требуется реализовать следующие интерфейсы:</p>

<ul>
<li>Интерфейс покупателей (<code>mockups/customers.png</code>)</li>
<li>Интерфейс товаров (<code>mockups/products.png</code>)</li>
</ul>

<p>Каждый интерфейс должен быть реализован на отдельном маршруте роутера.</p>

<h2>Интерфейс покупателей</h2>

<ul>
<li>Реализовать список покупателей с добавлением/редактированием/удалением элементов (см. раздел <em>Схема REST API -&gt; Customers</em>).</li>
<li>Создание покупателя должно быть реализовано в модальном окне.</li>
<li>Редактирование покупателя должно быть реализовано в модальном окне.</li>
<li>Подтверждение удаления покупателя должно быть реализовано в
модальном окне.</li>
</ul>

<h2>Интерфейс товаров</h2>

<ul>
<li>Реализовать список товаров с добавлением/редактированием/удалением элементов (см. раздел <em>Схема REST API -&gt; Products</em>).</li>
<li>Создание товара должно быть реализовано в модальном окне.</li>
<li>Редактирование товара должно быть реализовано в модальном окне.</li>
<li>Подтверждение удаления товара должно быть реализовано в модальном
окне.</li>
</ul>

<h1>Дополнительное задание. Интерфейсы списка счетов и создания/редактирования счёта</h1>

<p>Требуется дополнительно реализовать следующие интерфейсы:</p>

<ul>
<li>Интерфейс счетов (<code>mockups/invoice-list.png</code>)</li>
<li>Интерфейс создания/редактирования счёта (<code>mockups/invoice-edit.png</code>) </li>
</ul>

<p>Каждый интерфейс должен быть реализован на отдельном маршруте роутера.</p>

<h2>Интерфейс счетов</h2>

<p>• Реализовать список счетов с добавлением/редактированием/удалением элементов (см. раздел <em>Схема REST API -&gt; Invoices</em>).<br>
• Подтверждение удаления счёта должно быть реализовано в модальном окне.</p>

<h2>Интерфейс создания нового/редактирования существующего счёта</h2>

<p>Реализовать интерфейс создания/редактирования счета со следующим функционалом:</p>

<ul>
<li>установление размера скидки</li>
<li>выбор покупателя</li>
<li>добавление/редактирование количества/удаление товара</li>
<li>подсчёт и сохранение суммы ИТОГО (total)</li>
</ul>

<p>Структуры данных перечислены в разделах:</p>

<ul>
<li>Схема REST API -&gt; Invoices</li>
<li>Схема REST API -&gt; InvoiceItems Схема REST API</li>
</ul>

<h1>Схема REST API</h1>

<p>После запуска проекта (<code>npm start</code>) будет автоматически поднят-бекенд сервер реализующий следующие эндпоинты:</p>

<h2>Customers</h2>

<p><strong>Структура</strong></p>

<ul>
<li><code>id</code> (integer)</li>
<li><code>name</code> (string)</li>
<li><code>address</code> (string)</li>
<li><code>phone</code> (string)</li>
</ul>

<p><strong>Эндпоинты</strong></p>

<ul>
<li><code>GET | POST /api/customers</code></li>
<li><code>GET | PUT|DELETE /api/customers/{id}</code></li>
</ul>

<h2>Products</h2>

<p><strong>Структура</strong></p>

<ul>
<li><code>id</code> (integer)</li>
<li><code>name</code> (string)</li>
<li><code>price</code> (decimal)</li>
</ul>

<p><strong>Эндпоинты</strong></p>

<ul>
<li><code>GET | POST /api/products</code></li>
<li><code>GET | PUT | DELETE /api/products/{id}</code></li>
</ul>

<h2>Invoices</h2>

<p><strong>Структура</strong></p>

<ul>
<li><code>id</code> (integer)</li>
<li><code>customer_id</code> (integer)</li>
<li><code>discount</code> (decimal)</li>
<li><code>total</code> (decimal)</li>
</ul>

<p><strong>Эндпоинты</strong></p>

<ul>
<li><code>GET | POST /api/invoices</code></li>
<li><code>GET | PUT | DELETE /api/invoices/{id}</code></li>
</ul>

<h2>InvoiceItems</h2>

<p><strong>Структура</strong></p>

<ul>
<li><code>id</code> (integer)</li>
<li><code>invoice_id</code> (integer)</li>
<li><code>product_id</code> (integer)</li>
<li><code>quantity</code> (decimal)</li>
</ul>

<p><strong>Эндпоинты</strong></p>

<ul>
<li><code>GET | POST /api/invoices/{id}/items</code></li>
<li><code>GET | PUT | DELETE /api/invoices/{invoice_id}/items/{id}</code></li>
</ul>
