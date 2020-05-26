import React from 'react';

import './product-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const ProductItem = () => (
    <div className='product-item block'>
        <div className='content'>
            <div className='image'></div>
            <div className='info'>
                <div className='name h'>Fitofloral de Alegria</div>
                <div className='price sh'>R$ 44,00</div>
                <div className='quantity'>
                    <label for='qtd' className='t'>Quantidade: </label>
                    <input className='t' type='number' min='1' max='20' />
            </div>
                <div className='buttons'>
                    <CustomButton>ADICIONAR AO CARRINHO</CustomButton>
                    <CustomButton>COMPRAR AGORA</CustomButton>
                </div>

                <div className='pagseguro'></div>

                <div className='frete'>
                    <span className='t'>Calcule o Frete e Tempo de entrega</span>
                    <div className='calc flex'>
                        <input type='text' />
                        <CustomButton>Calcular</CustomButton>
                    </div>
                </div>
            </div>
        </div>

        <div className='product-description flex'>
                <ul className='description-menu t main-color-bg'>
                    <li className=''>Descrição</li>
                    <li className=''>Modo de uso</li>
                    <li>Conservação</li>
                </ul>

                <div className='description-content t'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non quam varius, 
                    bibendum nisl sed, vulputate felis. Donec cursus consequat lorem vitae vulputate. 
                    Sed vel gravida sapien. Ut iaculis lacus eu efficitur imperdiet. Quisque bibendum 
                    enim diam, eu consequat erat pharetra nec. Donec suscipit gravida quam, id tristique leo 
                    faucibus vitae. Donec ultricies porta magna quis laoreet. Quisque tincidunt posuere ante, 
                    a imperdiet nulla cursus eget. Sed tincidunt tortor libero, mattis efficitur neque luctus eu. 
                    Mauris pellentesque malesuada ligula, quis mattis ligula condimentum vitae. Pellentesque a 
                    arcu mauris. Morbi id eros felis. Donec purus justo, ullamcorper ut risus quis,
                    accumsan gravida urna. Integer gravida odio urna, ornare fermentum nisi dapibus gravida.
                    </p>
                </div>
        </div>
    </div>
);

export default ProductItem;