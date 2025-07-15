import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const pokemonData = [
  { id: 1, name: 'Бульбазавр', type: ['Трава', 'Яд'], color: 'bg-green-400', description: 'Семенной покемон' },
  { id: 4, name: 'Чармандер', type: ['Огонь'], color: 'bg-red-400', description: 'Ящерица' },
  { id: 7, name: 'Сквиртл', type: ['Вода'], color: 'bg-blue-400', description: 'Маленькая черепаха' },
  { id: 25, name: 'Пикачу', type: ['Электро'], color: 'bg-yellow-400', description: 'Мышь' },
  { id: 39, name: 'Джигглипафф', type: ['Обычный', 'Фея'], color: 'bg-pink-400', description: 'Воздушный шар' },
  { id: 54, name: 'Псайдак', type: ['Вода'], color: 'bg-blue-300', description: 'Утка' },
  { id: 104, name: 'Кубон', type: ['Земля'], color: 'bg-amber-600', description: 'Одинокий' },
  { id: 150, name: 'Мьюту', type: ['Психика'], color: 'bg-purple-400', description: 'Генетический' },
  { id: 6, name: 'Чаризард', type: ['Огонь', 'Полет'], color: 'bg-orange-500', description: 'Пламя' },
  { id: 144, name: 'Артикуно', type: ['Лед', 'Полет'], color: 'bg-cyan-400', description: 'Заморозка' },
  { id: 145, name: 'Запдос', type: ['Электро', 'Полет'], color: 'bg-yellow-500', description: 'Электричество' },
  { id: 146, name: 'Молтрес', type: ['Огонь', 'Полет'], color: 'bg-red-500', description: 'Пламя' }
];

const pokemonTypes = ['Все', 'Огонь', 'Вода', 'Трава', 'Электро', 'Психика', 'Лед', 'Земля', 'Яд', 'Полет', 'Обычный', 'Фея'];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('Все');

  const filteredPokemon = pokemonData.filter(pokemon => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'Все' || pokemon.type.includes(selectedType);
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-500/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6">
              POKÉMON
              <span className="block text-yellow-600 text-4xl md:text-5xl mt-2">
                Первое поколение
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Откройте для себя оригинальных 151 покемона из региона Канто
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 text-lg font-semibold rounded-full">
                <Icon name="Zap" size={20} />
                Начать исследование
              </Button>
              <Button variant="outline" className="border-yellow-600 text-yellow-700 hover:bg-yellow-50 px-8 py-3 text-lg rounded-full">
                <Icon name="BookOpen" size={20} />
                Покедекс
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Pokeball */}
        <div className="absolute top-10 right-10 w-24 h-24 rounded-full border-4 border-gray-800 bg-gradient-to-b from-red-500 to-white opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full border-4 border-gray-800 bg-gradient-to-b from-red-500 to-white opacity-20 animate-pulse"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Поиск покемонов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {pokemonTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => setSelectedType(type)}
                  className={`${
                    selectedType === type 
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-black' 
                      : 'border-yellow-400 text-yellow-700 hover:bg-yellow-50'
                  } rounded-full`}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pokemon Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Каталог покемонов
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPokemon.map((pokemon) => (
              <Card 
                key={pokemon.id} 
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-yellow-200 bg-white/80 backdrop-blur-sm cursor-pointer group"
              >
                <CardHeader className="text-center pb-2">
                  <div className={`w-24 h-24 mx-auto rounded-full ${pokemon.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl font-bold text-white">
                      #{pokemon.id.toString().padStart(3, '0')}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {pokemon.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{pokemon.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {pokemon.type.map((type) => (
                      <Badge 
                        key={type} 
                        variant="secondary" 
                        className="bg-yellow-100 text-yellow-800 border-yellow-300"
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPokemon.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-xl text-gray-600">Покемоны не найдены</p>
              <p className="text-gray-500">Попробуйте изменить поисковый запрос или фильтр</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400/10 to-amber-500/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Статистика</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200">
              <div className="text-5xl font-bold text-yellow-600 mb-2">151</div>
              <div className="text-xl text-gray-700">Всего покемонов</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200">
              <div className="text-5xl font-bold text-yellow-600 mb-2">15</div>
              <div className="text-xl text-gray-700">Типов покемонов</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200">
              <div className="text-5xl font-bold text-yellow-600 mb-2">1996</div>
              <div className="text-xl text-gray-700">Год выпуска</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">
            Покемон © Nintendo/Creatures Inc./GAME FREAK inc.
          </p>
          <p className="text-gray-400">
            Создано с ❤️ для всех тренеров покемонов
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;