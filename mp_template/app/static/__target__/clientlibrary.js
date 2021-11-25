// Transcrypt'ed from Python, 2021-11-24 16:13:42
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = '__main__';
export var gen_death = function () {
	console.log ('totalcases');
	var total_death = float (document.getElementsByName ('numbers') [0].value);
	var new_cases = float (document.getElementsByName ('numbers') [1].value);
	var new_tests = float (document.getElementsByName ('numbers') [2].value);
	var people_vacc = float (document.getElementsByName ('numbers') [3].value);
	var new_vaccinations = float (document.getElementsByName ('numbers') [4].value);
	console.log ('totalcases');
	var nodeath = ((((0.00213017390431345 * total_death + 0.0104366986021982 * new_cases) + -(3.46189224419462e-05) * new_tests) + (-(9.64601985212872) * Math.pow (10, -(7))) * people_vacc) + -(2.34387200641009e-05) * new_vaccinations) + 2.84284881239246;
	document.getElementById ('sorted1').innerHTML = str (nodeath);
};

//# sourceMappingURL=clientlibrary.map