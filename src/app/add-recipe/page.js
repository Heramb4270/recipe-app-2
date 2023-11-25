'use client'
import React, { useState } from 'react';

export default function AddRecipe() {
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [instructions, setInstructions] = useState('');
    const [servings, setServings] = useState('');

    const handleRecipeNameChange = (e) => {
        setRecipeName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleInstructionsChange = (e) => {
        setInstructions(e.target.value);
    };

    const handleServingsChange = (e) => {
        setServings(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission logic here
        // For instance, you can send the recipe data to a server or perform any necessary actions
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="py-10 px-28">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Add Recipe
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            action="#"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label
                                    htmlFor="recipeName"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Recipe Name
                                </label>
                                <input
                                    value={recipeName}
                                    onChange={handleRecipeNameChange}
                                    type="text"
                                    name="recipeName"
                                    id="recipeName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter recipe name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <textarea
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    name="description"
                                    id="description"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 h-20 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter recipe description"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="instructions"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Instructions
                                </label>
                                <textarea
                                    value={instructions}
                                    onChange={handleInstructionsChange}
                                    name="instructions"
                                    id="instructions"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 h-40 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter recipe instructions"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="servings"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Servings
                                </label>
                                <input
                                    value={servings}
                                    onChange={handleServingsChange}
                                    type="text"
                                    name="servings"
                                    id="servings"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter servings"
                                    required
                                />
                            </div>
                            <div className='flex flex-row space-x-4 justify-center'>
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Select a category</option>
                                        <option value="breakfast">Breakfast</option>
                                        <option value="lunch">Lunch</option>
                                        <option value="dinner">Dinner</option>
                                        <option value="dessert">Dessert</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="ingredients"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Ingredients
                                    </label>
                                    <select
                                        id="ingredients"
                                        name="ingredients"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Select an ingredient</option>
                                        <option value="eggs">Eggs</option>
                                        <option value="bread">Bread</option>
                                        <option value="milk">Milk</option>
                                        <option value="chicken">Chicken</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="quantity"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        id="quantity"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter quantity"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="unit"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"

                                    >
                                        Unit
                                    </label>
                                    <select
                                        id="unit"
                                        name="unit"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Select a unit</option>
                                        <option value="eggs">Teaspoon</option>
                                        <option value="bread">cup</option>
                                        <option value="milk">grams</option>
                                        <option value="chicken">units</option>
                                    </select>
                                </div>
                                <div className='flex flex-col justify-end'>
                                    <button
                                        type="button"
                                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>



                            <label
                                htmlFor="ingredients"
                                className="block text-sm font-medium text-gray-900 dark:text-white text-center"
                            >
                                Ingredients List
                            </label>


                            <div className="flex flex-row space-x-4 justify-center">
                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Ingredient
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Category
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Quantity
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Unit
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr class="bg-white dark:bg-gray-700">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                                                    Eggs
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                    Breakfast
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                    2
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                    Teaspoon
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                                </td>

                                            </tr>

                                            <tr class="bg-white dark:bg-gray-700">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                                                    Bread
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                    Breakfast
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                    2
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                    Cup
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className='flex flex-row justify-end space-x-4'>
                                <button
                                    type="button"
                                    className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Save Recipe
                                </button>

                                <button
                                    type="button"
                                    className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
