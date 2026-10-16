<template>
  <aside class="filters-panel">
        <div class="filters-head">
          <h3>Фильтры</h3>
          <button class="reset-btn" type="button">Сбросить</button>
        </div>

        <div class="filter-group">
          <h4 class="filter-title">Цена</h4>
          <div class="range">
            <div class="range-track"></div>
            <div class="range-fill"></div>
            <div class="range-thumb range-thumb--min"></div>
            <div class="range-thumb range-thumb--max"></div>
          </div>
          <div class="price-labels">
            <span>590 ₽</span>
            <span>34 500 ₽</span>
          </div>
        </div>

        <div class="filter-group">
          <h4 class="filter-title">Метка</h4>
          <label class="filter-check"><input type="checkbox" /> Скидка</label>
          <label class="filter-check"><input type="checkbox" /> Новинка</label>
          <label class="filter-check"><input type="checkbox" /> Хит</label>
        </div>

        <div class="filter-group">
          <h4 class="filter-title">Материал</h4>
          <label class="filter-check"><input type="checkbox" /> Металл</label>
          <label class="filter-check"><input type="checkbox" /> Шерсть</label>
          <label class="filter-check"><input type="checkbox" /> Хлопок</label>
          <label class="filter-check"><input type="checkbox" /> Керамика</label>
          <label class="filter-check"><input type="checkbox" /> Лён</label>
          <label class="filter-check"><input type="checkbox" /> Дуб</label>
        </div>

        <div class="filter-group">
          <h4 class="filter-title">Цвет</h4>
          <label class="filter-check"><input type="checkbox" /> Белый</label>
          <label class="filter-check"><input type="checkbox" /> Бежевый</label>
          <label class="filter-check"><input type="checkbox" /> Серый</label>
          <label class="filter-check"><input type="checkbox" /> Коричневый</label>
          <label class="filter-check"><input type="checkbox" /> Чёрный</label>
        </div>

        <div class="filter-group">
          <h4 class="filter-title">Стиль</h4>
          <label class="filter-check"><input type="checkbox" /> Скандинавский</label>
          <label class="filter-check"><input type="checkbox" /> Современный</label>
          <label class="filter-check"><input type="checkbox" /> Классический</label>
          <label class="filter-check"><input type="checkbox" /> Эко</label>
        </div>
      </aside>
</template>