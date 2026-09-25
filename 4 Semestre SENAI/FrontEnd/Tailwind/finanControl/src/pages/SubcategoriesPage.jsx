import { useState, useEffect, useCallback } from "react";
import { subcategoriaService } from "../services/subcategoriaService";
import { categoryService } from "../services/categoryService";
import SubcategoriaForm from "../components/SubcategoriaForm";
import SubcategoriaList from "../components/SubcategoriaList";

export default function SubcategoriaPage() {
  const [subcategorias, setSubcategorias] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [editingSubcategory, setEditingSubcategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Estabiliza a função de busca para evitar reações desnecessárias
  const reloadData = useCallback(async () => {
    try {
      setError("");

      const [subs, cats] = await Promise.all([
        subcategoriaService.getAll(),
        categoriaService.getAll(),
      ]);

      setSubcategorias(Array.isArray(subs) ? subs : []);
      setCategorias(Array.isArray(cats) ? cats : []);
    } catch (err) {
      setError(err.message || "Erro ao carregar dados");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;

    async function loadInitialData() {
      try {
        const [subs, cats] = await Promise.all([
          subcategoriaService.getAll(),
          categoryService.getAll(),
        ]);

        if (active) {
          setSubcategorias(Array.isArray(subs) ? subs : []);
          setCategorias(Array.isArray(cats) ? cats : []);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Erro ao carregar dados");
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadInitialData();

    return () => {
      active = false;
    };
  }, []);

  const handleSave = async (formData) => {
    setLoading(true);

    try {
      if (editingSubcategory) {
        const targetId =
          editingSubcategory.id_subcategoria || editingSubcategory.id;

        await subcategoriaService.update(targetId, formData);
        setEditingSubcategory(null);
      } else {
        await subcategoriaService.create(formData);
      }

      await reloadData();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja realmente excluir esta subcategoria?")) return;

    setLoading(true);

    try {
      await subcategoriaService.delete(id);
      await reloadData();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">
          Gerenciar Subcategorias
        </h1>
      </div>

      {error && (
        <div className="p-2 bg-red-100 border border-red-200 text-red-700 text-sm rounded-lg">
          {error}
        </div>
      )}

      <SubcategoriaForm
        key={
          editingSubcategory
            ? `edit-${editingSubcategory.id_subcategoria || editingSubcategory.id}`
            : "new"
        }
        onSubmit={handleSave}
        initialData={editingSubcategory}
        categories={categorias}
        onCancel={() => setEditingSubcategory(null)}
      />

      <SubcategoriaList
        subcategories={subcategorias}
        categories={categorias}
        onEdit={setEditingSubcategory}
        onDelete={handleDelete}
        loading={loading}
      />
    </div>
  );
}