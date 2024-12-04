import React from 'react';
import { Card } from '../types/Card';
import { CreditCard, Shield, Clock, Users, Percent } from 'lucide-react';

interface CardListProps {
  cards: Card[];
}

export default function CardList({ cards }: CardListProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {cards.map(card => (
        <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              <img
                src={card.imageUrl}
                alt={card.name}
                className="w-36 md:w-48 h-auto object-contain"
              />
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={card.brandImageUrl}
                    alt={card.brand}
                    className="h-6 w-auto"
                  />
                  <span className="text-sm text-gray-600">{card.brand}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left">{card.name}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">年会費</p>
                      <p className="font-medium">
                        初年度: {card.firstYearFee}<br />
                        次年度以降: {card.annualFee}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Percent className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">還元率</p>
                      <p className="font-medium">
                        ポイント: {card.pointRate}<br />
                        マイル: {card.mileRate || '-'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">追加カード</p>
                      <p className="font-medium">
                        枚数: {card.additionalCards}<br />
                        年会費: {card.additionalCardFee}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">保険</p>
                      <p className="font-medium text-sm">{card.insurance}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center md:text-left">
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto text-center"
              >
                詳細を見る
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}