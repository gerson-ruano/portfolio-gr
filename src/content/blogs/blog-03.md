---

title: "Admigr Filament"
publishedAt: 2025-01-03
description: "Aplicación que permite gestionar productos, administracion de roles y permisos de usuarios para ingreso al sistema asi como productos existentes, visualizaciòn de dashboard."
slug: "sistema-filament"
isPublished: true
imagePath: "../../assets/admigr.png"
---

## Descripción
Aplicación que permite gestionar productos, administracion de roles y permisos de usuarios para ingreso al sistema asi como productos existentes, visualizaciòn de dashboard.

## Tecnologias empleadas.
> El Framework que he utilizado es Laravel version 12 ya que me ha permitido crear fácilmente la estructura básica del proyecto haciendo uso de sus librerías, paquetes y herramientas. 

> Filament para disminuir el tiempo de desarrollo.

> Filament Shield para roles y permisos.

> Mysql como Base de Datos.

> Heroicons para los iconos.


## Modulos existentes

El sistema esta en constante actualización para incorporarle mas modulos y mejoras en sus funcionalidades.

> DESPACHOS,
> ADMINITRACION DE STOCK,
> WIDGET,
> ADMINISTRACION DE USUARIOS,
> ADMINISTRACION DE ROLES

## MODULO DESPACHOS DE ORDENES
Es donde se gestionan las ordenes de los productos existentes, tambien existe un listado de las ordenes con sus respectivos estados.

<img
      class="w-140 h-140 mb-3 shadow-lg border-2 border-neutral-500"
      src="/assets/images/crear despachos.png"
    />

## MODULO ROLES 
Permite administrar los roles y permisos a los que tienen acceso los usuarios del sistema.

<img
      class="w-140 h-140 mb-3 shadow-lg border-2 border-neutral-500"
      src="/assets/images/permisos.png"
    />

### Ejemplo: ProductResource

```php
class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-cube';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                ->label(__('nombre'))
                ->required()
                ->maxLength(255),

                Forms\Components\TextInput::make('barcode')
                ->label(__('Codigo'))
                ->required()
                ->maxLength(10),

                Forms\Components\TextInput::make('description')
                ->label(__('Descripción'))
                ->required()
                ->maxLength(255),

                Forms\Components\TextInput::make('cost')
                ->label(__('Costo'))
                ->required()
                ->maxLength(10),

                Forms\Components\TextInput::make('price')
                ->label(__('Precio'))
                ->required()
                ->maxLength(10),

                Forms\Components\TextInput::make('stock')
                ->label(__('Stock'))
                ->required()
                ->maxLength(10),

                Forms\Components\TextInput::make('alerts')
                ->label(__('Alertas'))
                ->required()
                ->maxLength(10),

                FileUpload::make('image')
                ->label('Imagen')
                ->image()
                ->preserveFilenames()
                ->directory('products')
                ->getUploadedFileNameForStorageUsing(fn ($file) => time() . '_' . $file->getClientOriginalName()),
            

                Select::make('category_id')
                ->label('Categoría')
                ->relationship('category', 'name')
                ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable()
                ->label(__('Nombre')),
                Tables\Columns\TextColumn::make('barcode')->searchable()
                ->label(__('Codigo')),
                Tables\Columns\TextColumn::make('description')->searchable()
                ->label(__('Descripción')),
                Tables\Columns\TextColumn::make('cost')->searchable()
                ->label(__('Costo')),
                Tables\Columns\TextColumn::make('price')->searchable()
                ->label(__('Precio')),
                Tables\Columns\TextColumn::make('stock')->searchable()
                ->label(__('Stock')),

                Tables\Columns\TextColumn::make('alerts')->searchable()
                ->label(__('Alertas'))
                ->badge() 
                ->color(fn ($state) => $state > 9 ? 'success' : 'danger'),

                ImageColumn::make('image')
                ->label('Imagen')
                ->size(40)
                ->extraAttributes(['style' => 'border-radius: 8px; object-fit: cover;'])
                ->getStateUsing(fn ($record) => $record->image ? asset('storage/' . $record->image) : asset('storage/noimg.jpg')),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}

```