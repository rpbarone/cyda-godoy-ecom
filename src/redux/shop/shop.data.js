const SHOP_DATA = {
 banhos: {
    id: 1,
    title: 'banhos de ervas',
    routeName: 'banhos-de-ervas',
    items: {
      banho_atrativo : {
        id: 1,
        name: 'Banho Atrativo',
        category: 'banhos',
        tags: [
          '+ atração',
          '+ auto-estima'
        ],
        collectionRoute: '/produtos/banhos-de-ervas',
        route: 'banho-atrativo',
        imageUrl: 'https://i.ibb.co/MkwxqR0/banho-atrativo.jpg',
        price: 25
      },
      banho_energetico : {
        id: 2,
        name: 'Banho Energético',
        category: 'banhos',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        description: `
        O banho energético é feito para conseguir te oferecer mais energia,
        disposição, e alegria em seu dia a dia. Garanta já o seu e não irá
        se arrepender demias, pois é muito bom mesmo. Banho energético da
        Cyda Godoy, para te deixar pronto para as atividades mais cansativas
        do seu dia!
        `,
        formasdepgto: `
        Pague em até 12x de R$120,00 sem juros!
        `,
        prazodeentrega: `
        Receba em sua casa em até 20 dias úteis!
        `,
        collectionRoute: '/produtos/banhos-de-ervas',
        route: 'banho-energetico',
        imageUrl: 'https://i.ibb.co/NKbwdMm/banho-energetico.jpg',
        price: 25
      },
      banho_intuicao: {
        id: 3,
        name: 'Banho Intuição',
        category: 'banhos',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ], 
        collectionRoute: '/produtos/banhos-de-ervas',
        route: 'banho-intuicao',
        imageUrl: 'https://i.ibb.co/LrzpFtG/banho-intui-ao.jpg',
        price: 25
      },
      banho_limpeza: {
        id: 4,
        name: 'Banho Limpeza',
        category: 'banhos',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/banhos-de-ervas',
        route: 'banho-limpeza',
        imageUrl: 'https://i.ibb.co/1n7XX4P/banho-limpeza.jpg',
        price: 25
      },
      banho_sete_ervas: {
        id: 5,
        name: 'Banho Sete Ervas',
        category: 'banhos',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/banhos-de-ervas',
        route: 'banho-sete-ervas',
        imageUrl: 'https://i.ibb.co/df5ddTZ/banho-sete-ervas.jpg',
        price: 25
      },
      banho_stress: {
        id: 6,
        name: 'Banho Stress',
        category: 'banhos',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/banhos-de-ervas',
        route: 'banho-stress',
        imageUrl: 'https://i.ibb.co/Lzbghk2/banho-stress.jpg',
        price: 25
      }
    }
  },
  fitoflorais: {
    id: 2,
    title: 'fitoflorais xamânicos',
    routeName: 'fitoflorais',
    items: {
      fitofloral_alegria: {
        id: 7,
        name: 'Fitofloral Alegria',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-alegria',
        imageUrl: 'https://i.ibb.co/tYNSjXf/fitofloral-xamanico-alegria.jpg',
        price: 44
      },
      fitofloral_amor: {
        id: 8,
        name: 'Fitofloral Amor',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-amor',
        imageUrl: 'https://i.ibb.co/kBLs0hx/fitofloral-xamanico-amor.jpg',
        price: 44
      },
      fitofloral_antialcool: {
        id: 9,
        name: 'Fitofloral Antiálcool',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-antialcool',
        imageUrl: 'https://i.ibb.co/N1fT7pV/fitofloral-xamanico-antialcool.jpg',
        price: 44
      },
      fitofloral_antifumo: {
        id: 10,
        name: 'Fitofloral Antifumo',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-antifumo',
        imageUrl: 'https://i.ibb.co/Bzr71Wy/fitofloral-xamanico-antifumo.jpg',
        price: 44
      },
      fitofloral_articulacao: {
        id: 11,
        name: 'Fitofloral Articulação',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-articulacao',
        imageUrl: 'https://i.ibb.co/5TjpYfW/fitofloral-xamanico-articulacao.jpg',
        price: 44
      },
      fitofloral_ativador: {
        id: 12,
        name: 'Fitofloral Ativador',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-ativador',
        imageUrl: 'https://i.ibb.co/brP2Sjp/fitofloral-xamanico-ativador.jpg',
        price: 44
      },
      fitofloral_calma: {
        id: 13,
        name: 'Fitofloral Calma',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-calma',
        imageUrl: 'https://i.ibb.co/n3Nx7R5/fitofloral-xamanico-calma.jpg',
        price: 44
      },
      fitofloral_clareza: {
        id: 14,
        name: 'Fitofloral Clareza',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-clareza',
        imageUrl: 'https://i.ibb.co/HVY2pvG/fitofloral-xamanico-clareza.jpg',
        price: 44
      },
      fitofloral_desapego: {
        id: 15,
        name: 'Fitofloral Desapego',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-desapego',
        imageUrl: 'https://i.ibb.co/YkB10W5/fitofloral-xamanico-desapego.jpg',
        price: 44
      },
      fitofloral_equilibrio: {
        id: 16,
        name: 'Fitofloral Equilíbrio',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-equilibrio',
        imageUrl: 'https://i.ibb.co/x5SCmqb/fitofloral-xamanico-equilibrio.jpg',
        price: 44
      },
      fitofloral_foco: {
        id: 17,
        name: 'Fitofloral Foco',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-foco',
        imageUrl: 'https://i.ibb.co/xD7GtRt/fitofloral-xamanico-foco.jpg',
        price: 44
      },
      fitofloral_inspiracao: {
        id: 18,
        name: 'Fitofloral Inspiração',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-inspiracao',
        imageUrl: 'https://i.ibb.co/zxX2cxR/fitofloral-xamanico-inspiracao.jpg',
        price: 44
      },
      fitofloral_limpeza_de_chackras: {
        id: 19,
        name: 'Fitofloral Limpeza dos Chackras',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-limpeza-de-chackras',
        imageUrl: 'https://i.ibb.co/pWD9HyY/fitofloral-xamanico-limpeza-dos-chackras.jpg',
        price: 44
      },
      fitofloral_meditacao: {
        id: 20,
        name: 'Fitofloral Meditação',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-meditação',
        imageUrl: 'https://i.ibb.co/gTCfM8p/fitofloral-xamanico-meditacao.jpg',
        price: 44
      },
      fitofloral_medo: {
        id: 21,
        name: 'Fitofloral Medo',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-medo',
        imageUrl: 'https://i.ibb.co/DzfHQjs/fitofloral-xamanico-medo.jpg',
        price: 44
      },
      fitofloral_mudanca: {
        id: 22,
        name: 'Fitofloral Mudança',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-mudanca',
        imageUrl: 'https://i.ibb.co/1LZzm5P/fitofloral-xamanico-mudanca.jpg',
        price: 44
      },
      fitofloral_relaxante: {
        id: 23,
        name: 'Fitofloral Relaxante',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-relaxante',
        imageUrl: 'https://i.ibb.co/NSM0Lws/fitofloral-xamanico-relaxante.jpg',
        price: 44
      },
      fitofloral_resgate_da_alma: {
        id: 24,
        name: 'Fitofloral Resgate da Alma',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-resgate-da-alma',
        imageUrl: 'https://i.ibb.co/8sZxpn7/fitofloral-xamanico-resgate-da-alma.jpg',
        price: 44
      },
      fitofloral_sos: {
        id: 25,
        name: 'Fitofloral SOS',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-sos',
        imageUrl: 'https://i.ibb.co/BtqvbsN/fitofloral-xamanico-sos.jpg',
        price: 44
      },
      fitofloral_superacao: {
        id: 26,
        name: 'Fitofloral Superação',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-superacao',
        imageUrl: 'https://i.ibb.co/jLRLC0K/fitofloral-xamanico-superacao.jpg',
        price: 44
      },
      fitofloral_timidez: {
        id: 27,
        name: 'Fitofloral Timidez',
        category: 'fitoflorais',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/fitoflorais',
        route: 'fitofloral-timidez',
        imageUrl: 'https://i.ibb.co/Tq5snSz/fitofloral-xamanico-timidez.jpg',
        price: 44
      },
    }
  },
  elixir: {
    id: 3,
    title: 'elixir de cristais',
    routeName: 'elixir-de-cristais',
    items: {
      elixir_abre_caminho: {
        id: 28,
        name: 'Elixir Abre Caminho',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-abre-caminho',
        imageUrl: 'https://i.ibb.co/jyHWvQH/elixir-de-cristais-abre-caminho.jpg',
        price: 44
      },
      elixir_afetividade: {
        id: 29,
        name: 'Elixir de Afetividade',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-afetividade',
        imageUrl: 'https://i.ibb.co/PY0ZLdM/elixir-de-cristais-afetividade.jpg',
        price: 44
      },
      elixir_ansiedade: {
        id: 30,
        name: 'Elixir de Ansiedade',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-ansiedade',
        imageUrl: 'https://i.ibb.co/WvT8jg8/elixir-de-cristais-ansiedade.jpg',
        price: 44
      },
      elixir_brilho_interior: {
        id: 31,
        name: 'Elixir de Brilho Interior',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-brilho-interior',
        imageUrl: 'https://i.ibb.co/1nTvHnS/elixir-de-cristais-brilho-interior.jpg',
        price: 44
      },
      elixir_comunicacao: {
        id: 32,
        name: 'Elixir de Comunicação',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-comunicacao',
        imageUrl: 'https://i.ibb.co/8j4df6Z/elixir-de-cristais-comunicacao.jpg',
        price: 44
      },
      elixir_depressao: {
        id: 33,
        name: 'Elixir de Depressão',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-depressao',
        imageUrl: 'https://i.ibb.co/m80zxgB/elixir-de-cristais-depressao.jpg',
        price: 44
      },
      elixir_elevacao: {
        id: 34,
        name: 'Elixir de Elevação',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-elevacao',
        imageUrl: 'https://i.ibb.co/NL1hDQd/elixir-de-cristais-elevacao.jpg',
        price: 44
      },
      elixir_emergencial: {
        id: 35,
        name: 'Elixir de Emergencial',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-emergencial',
        imageUrl: 'https://i.ibb.co/jy8Cf7H/elixir-de-cristais-emergencial.jpg',
        price: 44
      },
      elixir_energia_vital: {
        id: 36,
        name: 'Elixir de Energia Vital',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-energia-vital',
        imageUrl: 'https://i.ibb.co/gW8SB5v/elixir-de-cristais-energia-vital.jpg',
        price: 44
      },
      elixir_insonia: {
        id: 37,
        name: 'Elixir de Insônia',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-insonia',
        imageUrl: 'https://i.ibb.co/Pzf8jBT/elixir-de-cristais-insonia.jpg',
        price: 44
      },
      elixir_organizacao: {
        id: 38,
        name: 'Elixir de Organização',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-organizacao',
        imageUrl: 'https://i.ibb.co/Xzt4Gry/elixir-de-cristais-organizacao.jpg',
        price: 44
      },
      elixir_protecao: {
        id: 39,
        name: 'Elixir de Proteção',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-protecao',
        imageUrl: 'https://i.ibb.co/9Ghj1xL/elixir-de-cristais-protecao.jpg',
        price: 44
      },
      elixir_purificacao: {
        id: 40,
        name: 'Elixir de Purificação',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-purificacao',
        imageUrl: 'https://i.ibb.co/41L2WTW/elixir-de-cristais-purificacao.jpg',
        price: 44
      },
      elixir_realidade: {
        id: 41,
        name: 'Elixir de Realidade',
        category: 'elixir',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/elixir',
        route: 'elixir-realidade',
        imageUrl: 'https://i.ibb.co/By3fyF4/elixir-de-cristais-realidade.jpg',
        price: 44
      },
    }
  },
  aromatizadores: {
    id: 4,
    title: 'aromatizadores de ambiente',
    routeName: 'aromatizadores',
    items: {
      aromatizador_bons_fluidos: {
        id: 42,
        name: 'Aromatizador Bons Fluídos',
        category: 'aromatizadores',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/aromatizadores',
        route: 'aromatizador-bons-fluidos',
        imageUrl: 'https://i.ibb.co/znLF01x/aromatizador-bons-fluidos.jpg',
        price: 40
      },
      aromatizador_citronela: {
        id: 43,
        name: 'Aromatizador Citronela',
        category: 'aromatizadores',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/aromatizadores',
        route: 'aromatizador-citronela',
        imageUrl: 'https://i.ibb.co/xSTDttL/aromatizador-citronela.jpg',
        price: 40
      },
      aromatizador_prosperidade: {
        id: 44,
        name: 'Aromatizador Prosperidade',
        category: 'aromatizadores',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/aromatizadores',
        route: 'aromatizador-prosperidade',
        imageUrl: 'https://i.ibb.co/8rNd5zs/aromatizador-prosperidade.jpg',
        price: 40
      },
      aromatizador_tranquilidade: {
        id: 45,
        name: 'Aromatizador Tranquilidade',
        category: 'aromatizadores',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/aromatizadores',
        route: 'aromatizador-tranquilidade',
        imageUrl: 'https://i.ibb.co/PN7xJMK/aromatizador-tranquilidade.jpg',
        price: 40
      }
    }
  },
  sabonetes: {
    id: 5,
    title: 'sabonetes dos orixás',
    routeName: 'sabonetes',
    items: {
      sabonete_ewa: {
        id: 46,
        name: 'Sabonete Líquido Ewá',
        category: 'sabonetes',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/sabonetes',
        route: 'sabonete-ewa',
        imageUrl: 'https://i.ibb.co/Jpkz2GF/sabonete-liquido-ewa.jpg',
        price: 28
      },
      sabonete_exu: {
        id: 47,
        name: 'Sabonete Líquido Exu',
        category: 'sabonetes',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/sabonetes',
        route: 'sabonete-exu',
        imageUrl: 'https://i.ibb.co/bFffS9N/sabonete-l-quido-exu.jpg',
        price: 28
      },
      sabonete_iemanja: {
        id: 48,
        name: 'Sabonete Líquido Iemanjá',
        category: 'sabonetes',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/sabonetes',
        route: 'sabonete-iemanja',
        imageUrl: 'https://i.ibb.co/pbqGCzY/sabonete-liquido-iemanja.jpg',
        price: 28
      },
      sabonete_logun_ede: {
        id: 49,
        name: 'Sabonete Líquido Logun Edé',
        category: 'sabonetes',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/sabonetes',
        route: 'sabonete-logun-ede',
        imageUrl: 'https://i.ibb.co/8mzQk9t/sabonete-liquido-logun-ede.jpg',
        price: 28
      },
      sabonete_maria_padilha: {
        id: 50,
        name: 'Sabonete Líquido Maria Padilha',
        category: 'sabonetes',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/sabonetes',
        route: 'sabonete-maria-padilha',
        imageUrl: 'https://i.ibb.co/tJPgF5C/sabonete-liquido-maria-padilha.jpg',
        price: 33
      },
      sabonete_nana: {
        id: 51,
        name: 'Sabonete Líquido Nanã',
        category: 'sabonetes',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/sabonetes',
        route: 'sabonete-nana',
        imageUrl: 'https://i.ibb.co/wdfb20w/sabonete-liquido-nana.jpg',
        price: 28
      },
      sabonete_oba: {
        id: 52,
        name: 'Sabonete Líquido Obá',
        category: 'sabonetes',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/sabonetes',
        route: 'sabonete-oba',
        imageUrl: 'https://i.ibb.co/G2Dv184/sabonete-liquido-oba.jpg',
        price: 28
      },
      sabonete_obaluae: {
        id: 53,
        name: 'Sabonete Líquido Obaluaê',
        category: 'sabonetes',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/sabonetes',
        route: 'sabonete-obaluae',
        imageUrl: 'https://i.ibb.co/dJNr4Jj/sabonete-liquido-obaluae.jpg',
        price: 28
      },
      sabonete_ossain: {
        id: 54,
        name: 'Sabonete Líquido Ossain',
        category: 'sabonetes',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/sabonetes',
        route: 'sabonete-ossain',
        imageUrl: 'https://i.ibb.co/pvrgmzC/sabonete-liquido-ossain.jpg',
        price: 28
      },
      sabonete_oxaguian: {
        id: 55,
        name: 'Sabonete Líquido Oxaguian',
        category: 'sabonetes',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/sabonetes',
        route: 'sabonete-oxaguian',
        imageUrl: 'https://i.ibb.co/mq3MdZf/sabonete-liquido-oxaguian.jpg',
        price: 28
      },
      sabonete_oxumare: {
        id: 56,
        name: 'Sabonete Líquido Oxumarê',
        category: 'sabonetes',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/sabonetes',
        route: 'sabonete-oxumare',
        imageUrl: 'https://i.ibb.co/L5vx17T/sabonete-liquido-oxumare.jpg',
        price: 33
      }
    }
  },
  curumim: {
    id: 6,
    title: 'curumim fitoflorais infantis',
    routeName: 'curumim-fitoflorais-infantis',
    items: {
      fitofloral_infantil_afetividade: {
        id: 57,
        name: 'Fitofloral Infantil Afetividade',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-afetividade',
        imageUrl: 'https://i.ibb.co/VtHSGKw/fitofloral-infantil-afetividade.jpg',
        price: 44
      },
      fitofloral_infantil_apego: {
        id: 58,
        name: 'Fitofloral Infantil Apego',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-apego',
        imageUrl: 'https://i.ibb.co/r3zNr3R/fitofloral-infantil-apego.jpg',
        price: 44
      },
      fitofloral_infantil_apetite: {
        id: 59,
        name: 'Fitofloral Infantil Apetite',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-apetite',
        imageUrl: 'https://i.ibb.co/vxS26Nj/fitofloral-infantil-apetite.jpg',
        price: 44
      },
      fitofloral_infantil_aprendizado: {
        id: 60,
        name: 'Fitofloral Infantil Aprendizado',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-aprendizado',
        imageUrl: 'https://i.ibb.co/HqPM3yh/fitofloral-infantil-aprendizado.jpg',
        price: 44
      },
      fitofloral_infantil_choro: {
        id: 61,
        name: 'Fitofloral Infantil Choro',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-choro',
        imageUrl: 'https://i.ibb.co/QpsXnxQ/fitofloral-infantil-choro.jpg',
        price: 44
      },
      fitofloral_infantil_crescimento: {
        id: 62,
        name: 'Fitofloral Infantil Crescimento',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-crescimento',
        imageUrl: 'https://i.ibb.co/T2HG10k/fitofloral-infantil-crescimento.jpg',
        price: 44
      },
      fitofloral_infantil_indisposicoes_fisicas: {
        id: 63,
        name: 'Fitofloral Infantil Indisposições Físicas',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-indisposicoes-fisicas',
        imageUrl: 'https://i.ibb.co/sHxrJM6/fitofloral-infantil-indisposicoes-fisicas.jpg',
        price: 44
      },
      fitofloral_infantil_medo: {
        id: 64,
        name: 'Fitofloral Infantil Medo',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-medo',
        imageUrl: 'https://i.ibb.co/qg6Mpdz/fitofloral-infantil-medo.jpg',
        price: 44
      },
      fitofloral_infantil_obediencia: {
        id: 65,
        name: 'Fitofloral Infantil Obediência',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-obediencia',
        imageUrl: 'https://i.ibb.co/kHstQQz/fitofloral-infantil-obediencia.jpg',
        price: 44
      },
      fitofloral_infantil_obesidade: {
        id: 66,
        name: 'Fitofloral Infantil Obesidade',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-obesidade',
        imageUrl: 'https://i.ibb.co/pbK6MnW/fitofloral-infantil-obesidade.jpg',
        price: 44
      },
      fitofloral_infantil_protecao: {
        id: 67,
        name: 'Fitofloral Infantil Proteção',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-protecao',
        imageUrl: 'https://i.ibb.co/TbG9j0Z/fitofloral-infantil-protecao.jpg',
        price: 44
      },
      fitofloral_infantil_sono: {
        id: 68,
        name: 'Fitofloral Infantil Sono',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-sono',
        imageUrl: 'https://i.ibb.co/THysMw8/fitofloral-infantil-sono.jpg',
        price: 44
      },
      fitofloral_infantil_sos: {
        id: 69,
        name: 'Fitofloral Infantil SOS',
        category: 'curumim',
        tags: [
          '+ energia',
          '+ vitalidade',
          '+ disposição'
        ],
        collectionRoute: '/produtos/curumim-fitoflorais-infantis',
        route: 'fitofloral-infantil-sos',
        imageUrl: 'https://i.ibb.co/BCqvpQp/fitofloral-infantil-sos.jpg',
        price: 44
      },
    }
  }
};

export default SHOP_DATA;